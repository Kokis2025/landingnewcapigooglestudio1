import React from 'react';
import { VideoSectionData } from '../types';

export const VideoSection: React.FC<VideoSectionData> = ({ icon, title, subtitle, youtubeUrl }) => {
    return (
        <section className="py-20 gradient-sunset-glow section-animate">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="section-icon text-6xl mb-4">{icon}</div>
                    <h2 className="text-4xl font-extrabold text-[#2C3E50]">{title}</h2>
                    <p className="text-lg text-[#34495E] mt-2">{subtitle}</p>
                </div>
                
                <div className="max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden">
                    <div className="relative" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full"
                            src={youtubeUrl}
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
