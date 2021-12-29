// helloworld.script
var serverlist = scan("home")
for (i in serverlist) {
	var server = serverlist[i]
	print(server)

	if( !hasRootAccess(server) ) {
		nuke(server)
		print(server + ": has nuked.")
	}
}
