'use strict';
class Video {
  constructor(title, uploader, time) {
    if (typeof title !== 'string' || typeof uploader !== 'string' || !Number.isFinite(time) || time < 0) throw new TypeError('A title, uploader, and non-negative duration are required');
    Object.assign(this, { title, uploader, time });
  }
  watch() { const message = `${this.uploader} watched all ${this.time} of ${this.title}!`; console.log(message); return message; }
}
const firstVideo = new Video('JavaScript basics', 'John', 120);
const secondVideo = new Video('Classes explained', 'Betty', 240);
firstVideo.watch(); secondVideo.watch();
const videoData = [
  { title: 'Scope', uploader: 'Alex', time: 100 }, { title: 'Closures', uploader: 'Sam', time: 200 },
  { title: 'Objects', uploader: 'Taylor', time: 180 }, { title: 'Arrays', uploader: 'Chris', time: 160 },
  { title: 'Promises', uploader: 'Jordan', time: 300 }
];
const videos = videoData.map(({ title, uploader, time }) => new Video(title, uploader, time));
videos.forEach(video => video.watch());
module.exports = { Video, videos };
