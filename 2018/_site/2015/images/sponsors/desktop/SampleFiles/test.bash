echo $1 $2
# $1 is the out-files directory
# $2 is the std-files directory


for x in $1/*.out; do
	filename=${x%.*}
	basename=${filename##*/}
	diff -q $1/$basename.out $2/$basename.std > /dev/null
	if [ $? -eq 0 ]; then
		echo $basename "same"
	else
		echo $basename "different"
	fi
done



#	y=$(find $filename.std)
#	if [ $? -eq 0 ]; then
#		echo $filename "same"
#	else
#		echo $filename "different"
#	fi