<h2>LibrarySystem</h2>

<p>Name: library system</p>
<p>Description:</p>
<p>Keywords: AngularJS, NodeJS, MongoDB</p>

<h2>Set config info and start Server</h2>
<p>Before start the server, you should set correct path in <strong>.\bin\config.bat</strong></p>
<ul>
	<li>HOME - the path of this project in your machine</li>
	<li>MONGODB_PATH - the path you install MongoDB in your machine</li>
	<li>MONGODB_DATABASE - the Database name (used to import/export data)</li>
	<li>MONGODB_COLLECTION - the collection name (used to import/export data)</li>
</ul>
<p>After setting path, run <strong>.\bin\startServer.bat</strong> will start the server</p>
<p>For <strong>importData.bat/exportData.bat</strong> in bin folder are used to replicate the data.</p>

<h2>main File/Folder specs</h2>

<p>app - now it's a angular seed folder, need to modify</p>
<p>bin - some batch files to start the server</p>
<p>data - a data copy from MongoDB </p>
<p>mongodb - contain database side related code</p>
<p>server - contain server side related code</p>
<p>node_modules - contain grunt plugin</p>
<p>test - contain test related code, may use in the further</p>
<p>bower.json - bower management json file, don't know how to use now, may explore later</p>
<p>favicon.ico - website icon image file</p>
<p>Gruntfile.js - grunt task management file</p>
<p>package.json - description and library dependence file</p>
<p>server.js - server entry point file</p>
<p>web-server.js - temp server entry point file, need to remove in the further</p>

<h2>Github website link</h2>

<p><a href="Website: http://general20140404.github.io/LibrarySystem">Website: http://general20140404.github.io/LibrarySystem</a></p>
