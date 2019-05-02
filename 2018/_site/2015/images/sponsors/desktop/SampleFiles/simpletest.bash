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