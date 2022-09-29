import { useEffect, useState } from "react";
import { PlaceholderVideo } from "./Placeholder";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

interface Props {
    movieId: string;
}

interface VideoProps {
    id: string;
    key: string;
    name: string;
    published_at: string;
    site: string;
}

export function Video({ movieId }: Props) {
    const [video, setVideo] = useState<VideoProps[]>([]);

    const getVideoMovie = async (url: RequestInfo | URL) => {
        const res = await fetch(url);
        const data = await res.json();
        setVideo(data.results);
    };

    useEffect(() => {
        const movieUrl = `${moviesURL}${movieId}/videos?${apiKey}&language=pt-BR&region=BR`;

        getVideoMovie(movieUrl);
    }, []);

    return (
        <>
            {video.length > 0 &&
                <section className="w-full">
                    <h2 className="text-2xl font-semibold mb-8 pl-11">
                        Mídia
                    </h2>
                    <div className="w-full flex tablet:flex-row flex-col relative gap-4">
                        {video ?
                            video.map((video, key) =>
                                <div className="tablet:w-1/2 w-full" key={key}>
                                    <div className="max-w-[560px] max-h-[316px] mx-auto">
                                        <div className="relative block h-0 p-0 overflow-hidden pb-[56.25%]">
                                            <iframe
                                                width="560"
                                                height="315"
                                                src={`https://www.youtube.com/embed/${video.key}?rel=0`}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="absolute inset-0 border-0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            <>
                                <PlaceholderVideo />
                                <PlaceholderVideo />
                            </>
                        }
                    </div>
                </section>
            }
        </>
    );
}