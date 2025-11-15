using Microsoft.AspNetCore.SignalR;

namespace Portal.Hubs;

public class TerminalHub : Hub
{
	public async Task SendLine(string line)
	{
		await Clients.All.SendAsync("ReceiveLine", line);
	}
}
