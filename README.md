Schaeffer 21 ~ Spatialiser Song Generator
===========

Spatialiser Song Generator allows you to generate metadata for playing multichannel songs on the Schaeffer 21 Sound Spatializer (https://sonalux.co.uk/schaeffer21)

It is adapted from MT5 - A multitrack HTML5 Player (https://github.com/squallooo/MT5)

In order to run it, you will need nodeJS and some node modules. Just run `npm install` to download the modules.

Then look at the `server.js` file, you may want to change the default port value (var PORT = '8081')

Then run `node server.js` and open `http://localhost:8081` on a web browser. Then select any song in the drop down menu.

The multitrack songs are located in the directory assigned to `TRACK_PATH`, this is by default `client/multitrack`, and a multitrack song is just a directory with files in it, corresponding to the tracks. Just create new dir with mp3, ogg, wav files and reload the page, you will be able to play new songs.

Please see PDF for instructions on how to use the generator.


For any problems / questions,  https://sonalux.co.uk/contact/