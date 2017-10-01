#!/bin/bash


##############################
#     simpletest.bash        #
##############################

`echo "simpletest.bash Tests" > result.txt`

if [[ -e "simpletest.bash" ]]; then
	`echo "simpletest.bash found" >> result.txt`
	`cp  SimpleTest/*.out  SimpleTest/*.std .`

	`bash simpletest.bash &> output.student`

	if cmp -s output.student simple1.txt; then
		`echo "   Test 1 passed" >> result.txt`
	else
		`echo "   Test 1 Failed" >> result.txt`
	fi

	`mv *.out *.std SimpleTest/`	
else
	`echo "simpletest.bash not found" >> result.txt`
	`echo "    Test 1 failed" >> result.txt`
	echo "simpletest.bash not found"
fi

echo "" >> result.txt 

##############################
#        test.bash           #
##############################
`echo "test.bash Tests" >> result.txt`

if [[ -e "test.bash" ]]; then
        `echo "test.bash found" >> result.txt`
	
        `bash test.bash Test/Out/ Test/Std/ &> output.student`

        if cmp -s output.student test1.txt; then
                `echo "   Test 1 passed" >> result.txt`
        else
                `echo "   Test 1 Failed" >> result.txt`
        fi

	`rm output.student `

	`bash test.bash Test/Out Test/Std &> output.student`

        if cmp -s output.student test2.txt; then
                `echo "   Test 2 passed" >> result.txt`
        else
                `echo "   Test 2 Failed" >> result.txt`
        fi

	`rm output.student `
else
        `echo "test.bash not found" >> result.txt`
        `echo "    Test 1 failed" >> result.txt`
        `echo "    Test 2 failed" >> result.txt`
        echo "test.bash not found"
fi

echo "" >> result.txt 

##############################
#     defaulttest.bash       #
##############################

`echo "defaulttest.bash Tests" >> result.txt`

if [[ -e "defaulttest.bash" ]]; then
        `echo "defaulttest.bash found" >> result.txt`
        `cp DefaultTest/*.out DefaultTest/*.std .`

        `bash defaulttest.bash &> output.student`

        if cmp -s output.student default1.txt; then
                `echo "   Test 1 passed" >> result.txt`
        else
                `echo "   Test 1 Failed" >> result.txt`
        fi

	`rm output.student `

	`bash defaulttest.bash DefaultTest/Both/ &> output.student`

        if cmp -s output.student default2.txt; then
                `echo "   Test 2 passed" >> result.txt`
        else
                `echo "   Test 2 Failed" >> result.txt`
        fi

	`rm output.student `
	
	`bash defaulttest.bash DefaultTest/Both &> output.student`

        if cmp -s output.student default3.txt; then
                `echo "   Test 3 passed" >> result.txt`
        else
                `echo "   Test 3 Failed" >> result.txt`
        fi

	`rm output.student `

	`bash defaulttest.bash DefaultTest/Out/ DefaultTest/Std/ &> output.student`

        if cmp -s output.student default4.txt; then
                `echo "   Test 4 passed" >> result.txt`
        else
                `echo "   Test 4 Failed" >> result.txt`
        fi

	`rm output.student `

	`bash defaulttest.bash DefaultTest/Out DefaultTest/Std &> output.student`

        if cmp -s output.student default5.txt; then
                `echo "   Test 5 passed" >> result.txt`
        else
                `echo "   Test 5 Failed" >> result.txt`
        fi

	`mv *.out *.std DefaultTest`
	`rm output.student `
else
        `echo "defaulttest.bash not found" >> result.txt`
        `echo "    Test 1 failed" >> result.txt`
        echo "defaulttest.bash not found"
fi

echo "" >> result.txt

echo ""
echo ""

cat result.txt
