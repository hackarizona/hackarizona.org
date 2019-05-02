/*+----------------------------------------------------------------------
 ||
 ||  Class Demon 
 ||
 ||         Author:  Ian Tracey
 ||
 ||        Purpose:  This class creates new Demon objects which will be the object used
 ||					 as the algorithmic logic to Prog5.java's display of graphics. This
 ||					 class creates two 2D arrays construction; one being the current
 ||					 (or first) instance of the universe (oldUniverse) and the next one
 ||					 (newUniverse) which contains the changed values of the 2D array. Using
 ||					 Dewdney's rules for cyclical space, the Demon objects are able to recognize
 ||					 their neighbor's state valuation and from there alter adjacent values depending
 ||					 on the value's relationship to the other values (whether it is n-1 or not). These
 ||					 changes in values are implemented into the Prog5.java program as their values
 ||					 are correlated to different colors. 	  
 ||
 ||  Inherits From:  none
 ||
 ||     Interfaces:  none
 ||
 |+-----------------------------------------------------------------------
 ||
 ||      Constants:  
 ||
 |+-----------------------------------------------------------------------
 ||
 ||   Constructors:  public Demon (int, int, int)
 ||					   The three ints are height, width and the number of states, respectively.  
 ||
 ||  Class Methods:  none
 ||
 ||  Inst. Methods:  private void populate()
 ||					 public byte[][] getUniverse()
 ||					 public void setUniverse (byte[][])
 ||					 public void advance()
 ||
 ++-----------------------------------------------------------------------*/

class Demon {
	/* Instance Variables */
	
	private int height, // the number of rows that the 2D arrays will be constructed with
				width,  // the number of columns that the 2D arrays will be constructed with
				numberOfStates; // the number of states that the 2D arrays will be constructed with
								// (in actuality it is numberOfStates-1 in practice (index of 0 to numberOfStates-1)
			
			byte[][] oldUniverse, // array that serves as the first iteration of 2D array values and will be the first
								  // between both arrays in every iteration.
				     newUniverse; // array that serves as the second iteration of 2D array values and will be the last
			  					  // between both arrays in every iteration. (and will be set to oldUniverse after each iteration).
	
	/*---------------------------------------------------------------------
    |  Method Demon()
    |
    |  Purpose:  This method creates new Demon objects. Demon objects serve as the logic
    |			 behind cyclical space automata. Demon objects take three integers as formal
    |			 parameters that are used as determining both the dimensions of the 2D array 
    |			 (number of rows and number of columns) but also the number of states that the
    |			 array should contain; (the numberOfStates parameter will, in actuality, produce
    |			 numberOfStates-1 states). Demon objects follow Dewdney's ruleset on recognizing  
    |			 neighbor values (or 'cells') that have one less the quantity than the selected cell
    |			 has. If the cell is exactly one less than the selected cell, it is "consumed" by the 
    |			 larger cell and is replaced by the value of the larger cell. The value of 0 in the scope
    |			 of the state value is both the minimum (can be "consumed" by 1) and the maximum (can be
    |			 "consume the highest state available). This algorithmic process creates a series of value 
    |			 changes that are paired with the graphical information of Prog5.java and is the backbone 
    |			 of the simulated animation of moving patterns seen in the final result. 
    |
    |  Pre-condition: Three integer values are avilable to be passed in as formal parameters. 
    |
    |  Post-condition: A new Demon object is created and as a result, two 2D arrays are created
    |				   (oldUniverse and newUniverse).
    |
    |  Parameters:
    |     int height -- will serve as the amount of rows that both of the 2D arrays can have
    |
    |     int width -- will serve as the amount of columns that both of the 2D arrays can have
    |
    |     int numberOfStates -- the range of values that the 2D arrays can have;
    |							(will actually be numberOfStates-1)	
    |
    |  Returns:  None
    *-------------------------------------------------------------------*/
	
	public Demon (int height, int width, int numberOfStates) {
		this.numberOfStates = numberOfStates;
		this.width = width;
		this.height = height;

		// Creates new 2D array to be used as the foundation of future iterations to the overall automata
		oldUniverse = new byte[height][width];
		
		// Creates new 2D array to be used as the foundation of future iterations to the overall automata
		newUniverse = new byte[height][width];
		
		// Calls on the populate() method to assign random values to each position of both 2D arrays
		populate();
		
	} // end of Demon constructor

	/*---------------------------------------------------------------------
    |  Method private void populate()
    |
    |  Purpose:  Called on by the Demon to assign randomized values (between the
    |			 range of 0 and the numberOfStates-1) that will populate the 2D array
    |			 for oldUniverse. This method serves as the foundation to the cyclical
    |		     interaction where the Dewdney's algorithmic rules will interact with.
    |
    |  Pre-condition: A Demon object has been created; its height, width and  
    |				  numberOfStates have been specified in the parameter of the 
    |				  Demon constructor. 
    |
    |  Post-condition: The 2D is populated with random values from 0 to the 
    |				   the numberOfStates-1 as specified in the parameter of the Demon 
    |				   constructor. 
    |
    |  Parameters: none
    |
    |  Returns:  none
    *-------------------------------------------------------------------*/	
	private void populate() {
	 //Generating a random number and assigning it for each oldUniverse cell
		for (int c =0; c < height; c++){ // the number of columns is less than 
										 // included height parameter in the constructor 
			for (int r=0; r < width; r++){ // the number of columns is less than 
										   // included width parameter in the constructor 
				// random number is determined using the Math.random() method 
				// the range is specified between 0 and one less 
				// than the parameter-specific numberOfStates.
				byte randomNumber = ((byte)(Math.floor(Math.random() * ((numberOfStates-1) - 0 + 1) + 0))); 
				oldUniverse[c][r] = randomNumber; // each oldUniverse value is assigned a random value
			}
		}	
	} // end of populate()
	

	/*---------------------------------------------------------------------
    |  Method public void advance()
    |
    |  Purpose:  Used to apply Dewdney's rules of cyclical space to the oldUniverse 2D
    |			 array. The oldUniverse array values are first assigned to the newUniverse array
    |			 in order to account for unchanged values in the 2D array.
    |			 This method selects each value in the oldUniverse 2D array and 
    |			 then looks at neighboring values for values one less or (n-1) than the
    |			 current selected value (and the same with 0 and the max state value).
    |			 depending on the result of the comparison, the replaced value will be
    |			 accounted for and changed on the next iteration of the universe (called
    |			 newUniverse). This method also incorporates the 'Torus' effect, where the 
    |			 adjacent array values for the values at the edge of the universe are associated
    |			 with the value at either the bottom, left or right of the array (depending on the 
    |		     location of the selected value).
    |
    |  Pre-condition: A Demon object has been created; its height, width and  
    |				  numberOfStates have been specified in the parameter of the 
    |				  Demon constructor and its values have been populated. 
    |
    |  Post-condition: The oldUniverse array progresses through Dewdney's algorithmic 
    |				   rule set and the newUniverse is constructed based off of the changed
    |				   values that meet the set of criteria. The newUniverse is then assigned to 
    |				   the oldUniverse so that the process can be iterated in the future. 
    |
    |  Parameters: none
    |
    |  Returns:  none
    *-------------------------------------------------------------------*/		
	public void advance() {
		
		// Setting populated oldUniverse values equal to newUniverse
		for (int c = 0; c < height; c++){
			for (int r = 0; r < width; r++){
		newUniverse[c][r] = oldUniverse[c][r];
			}
		}

	// Iterates through each position of the 2D array 	
		for (int r = 0; r < height; r++)
		{
			for (int c =0; c < height; c++) 
		{
			// while these modifiers handle boundaries of specific sides of the universe,
			// their combination handles corners of the boundary.
			int colModifier1 = c+1; // handles column boundaries if the value is at the bottom
			int colModifier2 = c-1; // handles column boundaries if the value is on the left
			int rowModifier1 = r+1; // handles column boundaries if the value is at the right
			int rowModifier2 = r-1; // handles column boundaries if the value is at the top
			
			if(colModifier1 == height){ // Sets the left neighbor of the selected value to that
									    // of the far left (because the selected value is on the far right)
				colModifier1 = 0;
			}
			if(rowModifier2 == -1){ // Sets the right neighbor of the selected value to that
			    					// of the far right (because the selected value is on the far left)
				rowModifier2 = width-1;
			}
			if(rowModifier1 == width){ // Sets the up neighbor of the selected value to that
			    					   // of the most upwards value (because the selected value is on the far bottom)
				rowModifier1 = 0;
			}
			if(colModifier2 == -1){ // Sets the bottom neighbor of the selected value to that
			    				    // of the most downwards (because the selected value is on the far top) 
				colModifier2 = height-1;
			}
			
			// Looks to neighboring cells (with modifiers relating to universe boundary neighbors)
			// and sets any of them to zero in the next iteration if the selected array value is numberOfStates-1
			if (oldUniverse[c][r] == (numberOfStates-1)){
				if(oldUniverse[rowModifier2][c] == 0 || oldUniverse[rowModifier1][c] == 0 ||oldUniverse[r][colModifier2] == 0 || oldUniverse[r][colModifier1] == 0 
				|| oldUniverse[rowModifier2][colModifier2] == 0 || oldUniverse[rowModifier1][colModifier1] == 0 || oldUniverse[rowModifier1][colModifier2] == 0 || oldUniverse[rowModifier2][colModifier1] == 0)
				{ 
				newUniverse[c][r] = ((byte)0); // assigns the selected value to 0 (because 0 > numberOfStates-1)
				}
			}	
			
			
			// Looks to neighboring cells (with modifiers relating to universe boundary neighbors)
			// and sets any of them to one one less of the selected array value (n-1) if they are 
			// in fact n-1 to the value of the selected array. 
			if (oldUniverse[rowModifier2][c] == (oldUniverse[r][c]+((byte)1)) || oldUniverse[rowModifier1][c] == (oldUniverse[r][c]+((byte)1)) || oldUniverse[r][colModifier2] == (oldUniverse[r][c]+((byte)1)) 
			|| oldUniverse[r][colModifier1] == (oldUniverse[r][c]+((byte)1)) || oldUniverse[rowModifier2][colModifier2] == (oldUniverse[r][c]+((byte)1)) || oldUniverse[rowModifier1][colModifier1] == (oldUniverse[r][c]+((byte)1)) 
			|| oldUniverse[rowModifier1][colModifier2] == (oldUniverse[r][c]+((byte)1)) || oldUniverse[rowModifier2][colModifier1] == (oldUniverse[r][c]+((byte)1)) )
			{
				int addOne = ((oldUniverse[r][c]+(byte)1)); // sets the newUniverse array value to the
				newUniverse[r][c] = (byte)addOne; // value of the n+1 selected array value
			}
		
							  
		}
	}
		// Saving newUniverse values in for oldUniverse
		for (int c = 0; c < height; c++){
			for (int r = 0; r < width; r++){
				oldUniverse[c][r] = newUniverse[c][r]; 
			}
		}  
		
	
  } // end of advance()


	/*---------------------------------------------------------------------
    |  Method:  public byte[][] getUniverse() 
    			public void setUniverse(byte[][])
    |
    |  Purpose:  Used to return the oldUniverse Demon object to external programs (getUniverse)
    |			 and to externally change the values of the 2D array of the oldUniverse Demon
    |			 object (setUniverse).
    |
    |  Pre-condition: A Demon object has been created; its height, width and  
    |				  numberOfStates have been specified in the parameter of the 
    |				  Demon constructor and its values have been populated. 
    |
    |  Post-condition: The value is returned and the values of the 2D arrays are 
    |				   or unchanged (getUniverse); or inversely, the values are not 
    |				   returned but are altered to match the values of the passed
    |				   byte[][] (setUniverse). 
    |
    |  Parameters: setUniverse - (byte[][])  -- which will be a reference to the 2D array
    |											that will replace the values of the whatever
    |											2D the setUniverse method is being called on.
    |
    |  Returns:  getUniverse - byte[][] oldUniverse
    *-------------------------------------------------------------------*/	
	public byte[][] getUniverse() {
		
			return oldUniverse; 
	} // end of getUniverse()
	
	
	
	// iterates through the oldUniverse array and assigns its values to those of the newUniverse
	// array in order to iterate the advance method for future iterations.
	public void setUniverse (byte newUniverse [][]) {
		for (int c = 0; c < height; c++){
			for (int r = 0; r < width; r++){
				oldUniverse[c][r] = newUniverse[c][r]; 
			}
		}
	} // end of setUniverse() 	
		
		



} // end of Demon class 