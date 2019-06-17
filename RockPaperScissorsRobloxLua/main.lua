	local pcchoice = nil
	wins = 0
	losses = 0
	function playgame(userinput)
		local pcinput = getpcchoice()
   		local winner = determinewinner(userinput,pcinput)	
		if string.lower(winner)=="user won" then
			wins=wins+1
			script.Parent.Parent.Wins.Text="Wins: "..wins
		
		elseif string.lower(winner)=="computer won" then
			losses=losses+1
			script.Parent.Parent.Losses.Text="Losses: "..losses
			
		elseif string.lower(winner)=="tie" then
			print("Tie")
		end
		script.Parent.Parent.Winner.Text=winner
end
	
	function getpcchoice()
	local pcnumber = math.random(1,3)
	print("PC NUMBER: "..pcnumber)
	if pcnumber == 2 then
	return "paper"
	elseif pcnumber == 3 then
	return "scissors"
	elseif pcnumber == 1 then
	return "rock"
	end
	end
	
	function determinewinner(userchoice,compchoice)
		if string.lower(userchoice)=="rock" then
			if string.lower(compchoice)=="scissors" then
				return "User won"
			elseif string.lower(compchoice)=="paper" then
				return "Computer won"
			
				elseif string.lower(compchoice)=="rock" then
				return "Tie"
				end
		
			elseif string.lower(userchoice)=="scissors" then
			if string.lower(compchoice)=="paper" then
				return "User won"
			elseif string.lower(compchoice)=="rock" then
				return "Computer won"
				
				elseif string.lower(compchoice)=="scissors" then
				return "Tie"
			end
			elseif string.lower(userchoice)=="paper" then
			if string.lower(compchoice)=="rock" then
				return "User won"
			elseif string.lower(compchoice)=="scissors" then
				return "Computer won"
			
				elseif string.lower(compchoice)=="paper" then
				return "Tie"
				end
			end
			end
	script.Parent.MouseButton1Click:Connect(function()
					local userinput = script.Parent.Parent.Input.Text
							print("Userinput= "..userinput)

		playgame(userinput)
	end)
