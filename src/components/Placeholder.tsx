export function PlaceholderCard() {
    return (
        <div className="desktop:w-1/4 notebook:w-1/3 mobile:w-1/2 w-full px-3 animate-pulse">
            <div className="p-4 bg-zinc-800 rounded-lg flex-1 h-full flex flex-col">
                <div className="flex justify-center items-center w-full desktop:h-[400px] notebook:h-[486px] h-[450px] bg-zinc-900 rounded-lg">
                    <svg className="w-12 h-12 text-zinc-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                </div>
                <div className="p-4 flex-auto">
                    <div className="h-2.5 rounded-full bg-zinc-900 w-full mb-2" />
                    <div className="h-2.5 rounded-full bg-zinc-900 w-3/4 mb-4" />
                    <div className="h-2.5 rounded-full bg-zinc-900 w-1/3 mb-2" />
                </div>
                <div className="h-12 rounded-md bg-zinc-900 w-full" />
            </div>
        </div>
    );
}

export function PlaceholderMovie() {
    return (
        <div className="w-full flex notebook:flex-row flex-col gap-16 animate-pulse">
            <div className="notebook:w-1/3 w-full mx-auto">
                <div className="flex justify-center items-center w-full max-w-[420px] mx-auto h-[630px] bg-zinc-800 rounded-lg">
                    <svg className="w-12 h-12 text-zinc-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                </div>
                <div className="mt-5 flex flex-row gap-5 items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-zinc-800" />
                    <div className="flex-1">
                        <div className="h-7 rounded-full bg-zinc-800 w-3/4 mb-2" />
                        <div className="h-7 rounded-full bg-zinc-800 w-2/4" />
                    </div>
                </div>
            </div>
            <div className="notebook:w-2/3 w-full notebook:pt-20 pt-5 notebook:max-w-2xl">
                <div className="h-9 rounded-full bg-zinc-800 w-2/4 mb-3" />
                <div className="h-7 rounded-full bg-zinc-800 w-1/4 mb-5" />
                <div className="mb-10">
                    <div className="h-4 rounded-full bg-zinc-800 w-full mb-2" />
                    <div className="h-4 rounded-full bg-zinc-800 w-3/4 mb-2" />
                    <div className="h-4 rounded-full bg-zinc-800 w-full mb-2" />
                    <div className="h-4 rounded-full bg-zinc-800 w-3/4 mb-2" />
                    <div className="h-4 rounded-full bg-zinc-800 w-1/4" />
                </div>
                <div className="h-8 rounded-full bg-zinc-800 w-1/4 mb-3" />
                <div className="w-full flex flex-col divide-y-2 divide-zinc-800">
                    <div className="flex flex-row justify-between items-center py-4">
                        <div className="h-4 rounded-full bg-zinc-800 w-[56px]" />
                        <ul className="flex flex-row gap-3">
                            <div className="h-8 rounded-md bg-zinc-800 w-[82px]" />
                            <div className="h-8 rounded-md bg-zinc-800 w-[82px]" />
                            <div className="h-8 rounded-md bg-zinc-800 w-[82px]" />
                        </ul>
                    </div>
                    <div className="flex flex-row justify-between items-center py-4">
                        <div className="h-4 rounded-full bg-zinc-800 w-[97px]" />
                        <div className="h-4 rounded-full bg-zinc-800 w-[80px]" />
                    </div>
                    <div className="flex flex-row justify-between items-center py-4">
                        <div className="h-4 rounded-full bg-zinc-800 w-[56px]" />
                        <div className="h-4 rounded-full bg-zinc-800 w-[150px]" />
                    </div>
                    <div className="flex flex-row justify-between items-center py-4">
                        <div className="h-4 rounded-full bg-zinc-800 w-[65px]" />
                        <div className="h-4 rounded-full bg-zinc-800 w-[70px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function PlaceholderVideo() {
    return (
        <div className="tablet:w-1/2 w-full">
            <div className="max-w-[560px] max-h-[316px] mx-auto">
                <div className="relative block h-0 p-0 overflow-hidden pb-[56.25%]">
                    <div className="w-full h-full absolute inset-0 bg-zinc-800 flex items-center justify-center animate-pulse">
                        <svg className="w-12 h-12 text-zinc-700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" /></svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}