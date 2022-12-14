Schaeffer XXI ~ Spatialiser Song Generator
===========

Spatialiser Song Generator allows you to generate metadata for playing multichannel songs on the Schaeffer XXI Sound Spatializer (https://sonalux.co.uk/schaefferxxi)

It is adapted from MT5 - A multitrack HTML5 Player (https://github.com/squallooo/MT5)

In order to run it, you will need nodeJS and some node modules. 
Install from https://nodejs.org/en/download/ if you haven't got it already and make sure you choose npm as the package manager during the installation.

Then once you've got the schaeffer21 code (git clone or download), open a command prompt and cd into the directory, then type: `npm install` which will download the modules required by the application.

If you want you can edit `server.js` to change the default port value (var PORT = '8081')

Then run `node server.js` and open `http://localhost:8081` in your web browser.

The multitrack songs are located in the directory assigned to `TRACK_PATH`, this is by default `client/multitrack`, and a multitrack song is just a directory with files in it, corresponding to the tracks. Just create new dir with mp3, ogg, wav files and reload the page, you will be able to play new songs.

Please see "Schaeffer 21  Spatialiser Song Generator.pdf" for instructions on how to use the generator.


For any problems / questions,  https://sonalux.co.uk/contact/
