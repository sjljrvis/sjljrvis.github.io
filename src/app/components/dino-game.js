"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const GAME_WIDTH = 480;
const GAME_HEIGHT = 96;
const GROUND_HEIGHT = 20;
const DINO_SIZE = 18;
const OBSTACLE_WIDTH = 12;
const OBSTACLE_HEIGHT = 16;
const DINO_X = 28;
const SPEED = 4;
const GRAVITY = 0.45;
const JUMP_FORCE = 9;

export default function DinoGame() {
  const [dinoY, setDinoY] = useState(0);
  const [obstacleX, setObstacleX] = useState(GAME_WIDTH);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const velocityRef = useRef(0);
  const scoreRef = useRef(0);
  const intervalRef = useRef(null);

  const maxY = useMemo(() => GAME_HEIGHT - GROUND_HEIGHT - DINO_SIZE, []);
  const obstacleBottom = useMemo(() => GROUND_HEIGHT, []);

  function resetGame() {
    setDinoY(0);
    velocityRef.current = 0;
    setObstacleX(GAME_WIDTH);
    scoreRef.current = 0;
    setScore(0);
    setIsGameOver(false);
    setStarted(true);
  }

  function jump() {
    if (isGameOver) {
      resetGame();
      return;
    }
    if (!started) {
      setStarted(true);
    }
    setDinoY((currentY) => {
      if (currentY <= 0.5) {
        velocityRef.current = JUMP_FORCE;
      }
      return currentY;
    });
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Space" || event.code === "ArrowUp") {
        event.preventDefault();
        jump();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    if (!started) {
      return;
    }
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setDinoY((currentY) => {
        const nextVelocity = velocityRef.current - GRAVITY;
        let nextY = currentY + nextVelocity;
        velocityRef.current = nextVelocity;

        if (nextY < 0) {
          nextY = 0;
          velocityRef.current = 0;
        }
        if (nextY > maxY) {
          nextY = maxY;
          velocityRef.current = 0;
        }
        return nextY;
      });

      setObstacleX((currentX) => {
        const nextX = currentX - SPEED;
        if (nextX < -OBSTACLE_WIDTH) {
          scoreRef.current += 1;
          setScore(scoreRef.current);
          return GAME_WIDTH + Math.floor(Math.random() * 80);
        }
        return nextX;
      });
    }, 16);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [started, maxY]);

  useEffect(() => {
    if (!started || isGameOver) {
      return;
    }

    const overlapX = obstacleX < DINO_X + DINO_SIZE && obstacleX + OBSTACLE_WIDTH > DINO_X;
    const dinoTouchesObstacle = dinoY < OBSTACLE_HEIGHT;

    if (overlapX && dinoTouchesObstacle) {
      setIsGameOver(true);
      setStarted(false);
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    }
  }, [dinoY, obstacleX, started, isGameOver]);

  return (
    <div className="mt-2">
      <div className="mb-1 flex items-center justify-between text-[11px] text-[var(--muted)]">
      </div>
      <button
        type="button" 
        onClick={jump}
        className="relative block w-full overflow-hidden rounded bg-[var(--background)]"
        style={{ height: GAME_HEIGHT }}
        aria-label="Play mini dinosaur game"
      >
        <div
          className="absolute left-0 w-full border-t border-[var(--border)]"
          style={{ bottom: obstacleBottom }}
        />
        <div
          className="absolute"
          style={{
            left: DINO_X - 3,
            bottom: obstacleBottom + dinoY - 1,
            width: 40     ,
            height: 25,
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 18" className="h-full w-full">
            <rect x="5" y="1" width="14" height="11" fill="#e5754f" />
            <rect x="3" y="4" width="2" height="5" fill="#e5754f" />
            <rect x="19" y="4" width="2" height="5" fill="#e5754f" />
            <rect x="6" y="12" width="2" height="5" fill="#e5754f" />
            <rect x="9" y="12" width="2" height="5" fill="#e5754f" />
            <rect x="12" y="12" width="2" height="5" fill="#e5754f" />
            <rect x="15" y="12" width="2" height="5" fill="#e5754f" />
            <rect x="8" y="5" width="2" height="2" fill="#111111" />
            <rect x="14" y="5" width="2" height="2" fill="#111111" />
          </svg>
        </div>
        <div
          className="absolute"
          style={{
            left: obstacleX - 2,
            bottom: obstacleBottom,
            width: 16,
            height: OBSTACLE_HEIGHT + 2,
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 16 18" className="h-full w-full">
            <rect x="6" y="2" width="4" height="14" fill="#2f9f74" />
            <rect x="4" y="6" width="2" height="4" fill="#2f9f74" />
            <rect x="10" y="4" width="2" height="5" fill="#2f9f74" />
            <rect x="3" y="10" width="3" height="2" fill="#2f9f74" />
            <rect x="10" y="9" width="3" height="2" fill="#2f9f74" />
            <rect x="5" y="16" width="6" height="2" fill="#1f6f55" />
          </svg>
        </div>
        {!started && !isGameOver && (
          <div className="absolute inset-0 flex items-center justify-center text-[11px] text-[var(--muted)]">
            Press Space / ArrowUp or click to jump
          </div>
        )}
        {isGameOver && (
          <div className="absolute inset-0 flex items-center justify-center text-[11px] text-[var(--foreground)]">
            Game Over - press Space or click to restart
          </div>
        )}
      </button>
    </div>
  );
}
