interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 3613,
    song: "Pursuit of Happiness",
    details: {
        author: "Kid Cudi",
        year: 2009
    }
}

const song = 'New Song'

const {song: anotherSong, songDuration: duration} = audioPlayer;
const {details: {author}} = audioPlayer;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

const [,,trunks='Not found']: string[] = ['Goku', 'Vegeta'];

console.error('Character 3: ', trunks);

export { };