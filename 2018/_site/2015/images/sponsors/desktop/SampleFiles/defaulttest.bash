if [ "$#" -eq 0 ]; then

for x in *.out; do
	filename="${x%.*}"
	y=$(find $filename.std)
	diff -q $x $y > /dev/null
	if [ $? -eq 0 ]; then
		echo $filename "same"
	else
		echo $filename "different"
	fi
done

fi

# If there is 1 argument, then that is the directory that
# the .out and .std files
if [ "$#" -eq 1 ]; then
cd $1
for x in *.out; do
	filename="${x%.*}"
	y=$(find $filename.std)
	diff -q $x $y > /dev/null
	if [ $? -eq 0 ]; then
		echo $filename "same"
	else
		echo $filename "different"
	fi
done
fi

if [ "$#" -eq 2 ]; then
for file in $1/*; do
	fullFileOut="$file"
	choppedFileOut=${fullFileOut##*/}
	basename=${choppedFileOut%.*}
	fullFileStd=$(find $2 -name $basename.std)
	choppedFileStd=${fullFileStd##*/}

	diff $1/$choppedFileOut $2/$choppedFileStd > /dev/null
	if [ $? -eq 0 ]; then
		echo $basename "same"
	else
		echo $basename "different"
	fi
done
fi

