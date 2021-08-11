import { videos, video } from './../../lib/indexTypes';

export type VideoViewProps = {
    video: video;
}

export type VideoAreaProps = {
    videos?:  videos;
    movieTitle: string;
}

export type VideoModalProps = {
    video: video;
    closeFunction: (state:boolean) => void;
}
