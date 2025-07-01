'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Upload, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function CrewPhotosPage() {
  const { toast } = useToast();
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const getCameraPermission = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setHasCameraPermission(false);
        console.error('Camera API not supported in this browser.');
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera permissions in your browser settings.',
        });
      }
    };
    getCameraPermission();

    // Capture the current video element for cleanup
    const currentVideo = videoRef.current;

    return () => {
      if (currentVideo && currentVideo.srcObject) {
        const stream = currentVideo.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [toast]);

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        const dataUrl = canvas.toDataURL('image/jpeg');
        setPhotos(prevPhotos => [...prevPhotos, dataUrl]);
        toast({ title: 'Photo Captured!', description: 'Added to the gallery below.' });
      }
    }
  };

  const deletePhoto = (indexToDelete: number) => {
    setPhotos(prevPhotos => prevPhotos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Job Photos</CardTitle>
          <CardDescription>Capture photos for before/after or to document damages.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden border">
            <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
            <canvas ref={canvasRef} className="hidden" />
            {hasCameraPermission === false && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                 <Alert variant="destructive" className="w-3/4">
                    <AlertTitle>Camera Access Required</AlertTitle>
                    <AlertDescription>
                        Please allow camera access to use this feature. You may need to refresh the page and grant permission.
                    </AlertDescription>
                </Alert>
              </div>
            )}
             {hasCameraPermission === null && (
                 <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                    <p>Requesting camera permission...</p>
                 </div>
             )}
          </div>
          <Button size="lg" className="w-full h-16 text-xl" onClick={capturePhoto} disabled={!hasCameraPermission}>
            <Camera className="mr-4 h-8 w-8" />
            Capture Photo
          </Button>
        </CardContent>
      </Card>
      
      {photos.length > 0 && (
          <Card>
            <CardHeader>
                <CardTitle>Captured Photos ({photos.length})</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {photos.map((photo, index) => (
                        <div key={index} className="relative group">
                            <Image src={photo} alt={`Captured photo ${index + 1}`} width={200} height={150} className="rounded-lg object-cover w-full aspect-video" />
                            <Button variant="destructive" size="icon" className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => deletePhoto(index)}>
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                </div>
                 <Button variant="outline" size="lg" className="w-full mt-6">
                    <Upload className="mr-2 h-5 w-5" />
                    Upload All Photos
                </Button>
            </CardContent>
          </Card>
      )}
    </div>
  );
}
