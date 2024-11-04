"use client";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes, useRef, useState, useEffect } from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import {
  BiHeartCircle,
  BiPauseCircle,
  BiPlayCircle,
  BiSkipPrevious,
  BiSkipNextCircle,
  BiShuffle,
  BiRepeat,
} from "react-icons/bi";

export interface IProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVars> {
  title: string;
  subline: string;
  audioUrl: string;
  listText: any[];
  sideEffect?: "alertMe" | "consoleLog";
  className?: string;
  imageUrl?: string;
  random: any;
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const StudioAudioPlayer: FC<IProps> = ({
  title,
  subline,
  audioUrl,
  className,
  sideEffect,
  imageUrl,
  random,
  listText,
  variant = "primary",
  ...ctflProps
}) => {
  const [liked, setLiked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;
    console.log("audacity", audio.duration);
    const updateElapsedTime = () => setElapsedTime(audio.currentTime);
    setDuration(audio.duration);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateElapsedTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateElapsedTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  return (
    <div className="w-screen items-center flex justify-center">
      <audio ref={audioRef} src={audioUrl} className="hidden" />
      <Card isBlurred className="border-none w-full max-w-lg" shadow="sm">
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="Album cover"
                className="object-cover"
                height={200}
                shadow="md"
                src={imageUrl}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-small">{subline}</p>
                  <h1 className="text-large font-medium mt-2">
                    Frontend Radio
                  </h1>
                </div>
                <Button
                  isIconOnly
                  className=" data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                  onPress={() => setLiked((v) => !v)}
                >
                  <BiHeartCircle
                    className={liked ? "[&>path]:stroke-transparent" : ""}
                    fill={liked ? "currentColor" : "none"}
                  />
                </Button>
              </div>

              <div className="flex flex-col mt-3 gap-1">
                <Slider
                  aria-label="Music progress"
                  value={(elapsedTime / duration) * 100}
                  onChange={(value: any) => {
                    if (audioRef.current) {
                      audioRef.current.currentTime = (value / 100) * duration;
                      setElapsedTime(audioRef.current.currentTime);
                    }
                  }}
                  classNames={{
                    track: "bg-default-500/30x",
                    thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foregroundx",
                  }}
                  //   color="foreground"
                  size="sm"
                />
                <div className="flex justify-between">
                  <p className="text-small">{formatTime(elapsedTime)}</p>
                  <p className="text-small">{formatTime(duration)}</p>
                </div>
              </div>

              <div className="flex w-full items-center justify-center">
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                >
                  <BiRepeat />
                </Button>
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                >
                  <BiSkipPrevious />
                </Button>
                <Button
                  isIconOnly
                  className="w-auto h-auto data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                  onPress={togglePlayPause}
                >
                  {playing ? (
                    <BiPauseCircle size={54} />
                  ) : (
                    <BiPlayCircle size={54} />
                  )}
                </Button>
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                >
                  <BiSkipNextCircle />
                </Button>
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                >
                  <BiShuffle />
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

const buttonVars = cva("base-btn", {
  variants: {
    variant: {
      primary: "btn-primary",
      secondary: "btn-secondary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default StudioAudioPlayer;
