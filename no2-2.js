// hack-loop.script
while(true){
	var serverlist = scan("home")
	for (i in serverlist) {
		var server = serverlist[i]
		if( hasRootAccess(server) ) {
			hack(server)
			print(server + " has hacked.")
		}
	}
}
