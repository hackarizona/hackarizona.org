# Each address is 4 bytes long inside of the array

#Printing words from the strings:
#Words in this assignment are defined as sequences of characters that are delimited by:
# • the beginning of the string
# • the nul character at the end of the string
# • whitespace characters (tab, blank space, newline) that occur within the string, and
# • a word cannot be zero characters in length.

#Output format:
#For each string in the array of strings, your program will
# • print the original string,
# • print each word found in the string, one word to a line.
# • keep a running count of the number of words found so far.
#After printing each of the words found in one string, print the word count to that point. When 
#done processing all the strings, print the final word count.


# ---------------------------------------------------------------------------
# Ian Tracey
# October 24th 2014
# Csc 252
# ---------------------------------------------------------------------------
# ---------------------------------------------------------------------------
# ---------------------------------------------------------------------------
.data

string42: .asciiz  "GLENDOWER:   I can call spirits from the vasty deep."
string91: .asciiz  "\t\t\n\n  \n\t"
string73: .asciiz  "HOTSPUR:     Why, so can I, or so can any man;"

numPhrases:
          .word 6

string68: .asciiz  "             But will they come when you do call for them?"
string23: .asciiz  "   \t\t   \n\n   "
string12: .asciiz  "William Shakespeare,    Henry IV,    Part 1"

phrases:  .word string42
          .word string91
          .word string73
          .word string68
          .word string23
          .word string12
 


# Your code goes below this line
.data
originalStringStatement: .asciiz "The original string:\n"
wordsFoundStatement:     .asciiz "Words found in the string:\n"
wordCountStatement:		 .asciiz "Word count is now "
finalWordCountStatement: .asciiz "Final word count is "
newline: 				 .asciiz "\n"
debug:					 .asciiz "DEBUG"





.text
main:	# Function prologue -- even main has one
		addiu $sp, $sp, -24 				# allocate stack space -- default of 24 here
		sw	  $fp, 0($sp)					# save caller's frame point
		sw	  $ra, 4($sp)					# save return address
		addiu $fp, $sp, 20  				# setup main's frame pointer

		# Loads the number of phrases there are in the phrase array
		la    $t0, numPhrases
		lb    $s0, 0($t0)   				# $s0 = numPhrases
		lw    $t2, 0($t0)					# loads the address of numPhrases 

		addi  $s8,  $zero, 0   				# initalizes the word counter ( $s8 ); $s8 = WORD COUNTER

		addi  $t1, $zero, 0 				# $t1 is the address pointer,  set to 0 
		addi  $t8, $zero, 0 				# $t8 is the iterator counter, set to 0
		la    $t0, phrases  				# primes the loop with $t0 = the first address of phrases

		
		# prints the original string phrase array (outer loop)
printOriginalString:		
		beq   $t8, $s0, finalWordCount 		# If the iterator value equals the numPhrases value, print the final word count

		addi  $v0, $zero, 4 
		la    $a0, originalStringStatement
		syscall				  				# prints "The original string: "
		lw    $t2, 0($t0)	   				# loads the content inside the address of phrases
		add   $a0, $zero, $t2  				# loads phrase content to print
		syscall				   				# prints string content
		addi  $t1, $t1, 4      				# iterates the address counter
		addi  $t8, $t8, 1      				# iterates iterator counter




		addi  $t7,  $zero, 0   				# initalizes counter for character iteration ( $t7 )
		la    $t3,  phrases    				# loads the address of phrases for a second time to avoid conflict with the outer loop
		addi  $t4,  $zero, 0   				# initalizes the address pointer for each byte ( $t4 )

		addi  $v0, $zero, 4   				# syscall to print a string
		la    $a0, newline    				# loads the newline string
		syscall               				# prints "\n"

		addi  $v0, $zero, 4   				# syscall to print a string
		la    $a0, wordsFoundStatement    	# loads the wordsFoundStatement
		syscall               				# prints "Words found in string"	

SanitizeWordBeginning:
		add   $s5, $t0, $zero  				# imports the latest memory location of the word; $s5 = LATEST MEMORY LOCATION OF WORD
		lw    $t5, 0($s5)      				# loads the latest word; $t5 = LATEST WORD
		add   $t5, $t5, $t4    				# increments the address of the byte; $t5 = LATEST WORD FOR BYTE 
		lb    $s6, 0($t5)      				# loads the latest byte; $s6 = LATEST BYTE

		beq   $s6, 32, SanitizeBeginning 	# checks to see if the character is a space, if it is a newline character is printed
		beq   $s6, 9, SanitizeBeginning 	# checks to see if the character is a tab character /t), if it is a newline character is printed
		beq   $s6, 10, SanitizeBeginning 	# checks to see if the character is a newline character, if it is a newline character is printed
		beq   $s6, 0, skipWord				# checks to see if the next character is a null character, if it is, then the word is skipped entirely
		j CharacterLoop

SanitizeBeginning:		
		add   $t4, $t4, 1 					# iterate the address pointer in order to avoid the non-word characters in the beggining
		j SanitizeWordBeginning



CharacterLoop:
		
		add   $s5, $t0, $zero  				# imports the latest memory location of the word; $s5 = LATEST MEMORY LOCATION OF WORD
		lw    $t5, 0($s5)      				# loads the latest word; $t5 = LATEST WORD
		add   $t5, $t5, $t4    				# increments the address of the byte; $t5 = LATEST WORD FOR BYTE 
		lb    $s6, 0($t5)      				# loads the latest byte; $s6 = LATEST BYTE

		beq   $s6, 0, wordCounter			# if the value is the null character, you have reached the end of the string and the word count is added


		beq   $s6, 32, isNewWord 			# checks to see if the character is a space, if it is a newline character is printed
		beq   $s6, 9, isNewWord 			# checks to see if the character is a tab character /t), if it is a newline character is printed
		beq   $s6, 10, isNewWord 			# checks to see if the character is a newline character, if it is a newline character is printed
		
		addi  $v0, $zero, 11  				# syscall to print character
		add   $a0, $zero, $s6 				# loads content to print into printing register $a0
		syscall				  				# prints character
		j nextCharacter       				# jumps to increement address counter, skipping newline printing

isNewWord:
		add   $s1, $t4, $zero  				# copies into $s1 for lookahead address pointer
spacesSkipLoop:	
		addi  $s1, $s1, 1      				# lookahead address modifier ( address pointer ($t4) + 1) 
		add   $s5, $t0, $zero  				# imports the latest memory location of the word; $s5 = LOADS LOOKAHEAD
		lw    $s2, 0($s5)      				# loads the latest word; $s2 = LOOKAHEAD WORD
		add   $s2, $s2, $s1    				# increments the address of the byte; $s2 = LOOKAHEAD ADDRESS
		lb    $s3, 0($s2)      				# loads the latest byte; $s3 = LOOKAHEAD ADDRESS

		beq   $s3, 32, stillSpaces			# checks to see if the next character (another space) should also be skipped
		beq   $s3, 9,  stillSpaces 			# checks to see if the next character (a \t) should also be skipped
		beq   $s3, 10, stillSpaces			# checks to see if the next character (a \n) should also be skipped
		beq   $s3, 0,  nextCharacter
		j spacesSkipped

stillSpaces:		
		add   $t4, $t4, 1 					# interates the address point in order to avoid the non-word characters

		j spacesSkipLoop 

spacesSkipped: 
		addi  $v0, $zero, 4   				# syscall to print a string
		la    $a0, newline    				# loads the newline string
		syscall               				# prints "\n" 
		addi  $s8, $s8, 1     				# increments word counter; $s8 = WORD COUNTER 

nextCharacter:
		addi  $t4, $t4, 1 	  				# increments address counter; $t4 = ADDRESS POINTER

		j CharacterLoop

wordCounter:
		addi  $s8, $s8, 1     				# increments word counter (because the last word may not have a space after it); $s8 = WORD COUNTER 
		addi  $v0, $zero, 4   				# syscall to print a string
		la    $a0, newline    				# loads newline character to print
		syscall				  				# prints "\n"
skipWord:		
		la    $a0, wordCountStatement  		# loads the wordsCountStatement
		syscall               				# prints "Word count is now 2"	
		addi  $v0, $zero, 1   				# syscall to print an integer
		add   $a0, $s8, $zero 				# loads wordCount value to print
		syscall               				# prints "Word count is now {$s8]"			



printOriginalStringContinue:
		addi  $v0, $zero, 4	    			# syscall to print a string
		la    $a0, newline					# loads "\n" to print
		
		la    $t0, phrases   				# loads the first address of phrases		 
		add   $t0, $t0, $t1  				# loads the next word (based on interator counter) in the phrase array

		la    $a0, newline					# loads newline string
		syscall								# prints "\n"
		syscall								# prints "\n"
		j printOriginalString



finalWordCount:
		addi  $v0, $zero, 4					# loads the syscall for string
		la    $a0, finalWordCountStatement	# loads finalWord statement
		syscall								# prints "Final word count:\n"
		addi  $v0, $zero, 1 				# loads the syscall for integer
		add   $a0, $zero, $s8 				# loads updated word count
		syscall								# prints updated word count
		addi  $v0, $zero, 4 				# loads the syscall for string
		la    $a0, newline					# loads newline string
		syscall								# prints "\n"

done:	
# Epilogue for main -- restore stack & frame pointers and return
		lw     $ra, 4($sp)					# restore return address from stack
		lw	   $fp, 0($sp)					# restore the caller's frame pointer
		addiu  $sp, $sp, 24					# restore the caller's stack pointer
		jr	   $ra							# return to caller's codes		