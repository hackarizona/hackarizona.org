/*=============================================================================
 |   Assignment:  Program #5:  Demons of Cyclic Space
 |       Author:  Ian Tracey (ianrtracey@email.arizona.edu)
 | Sect. Leader:  Christian Montoya 
 |
 |       Course:  Csc 227
 |   Instructor:  L. McCann
 |     Due Date:  Tuesday, March 4th 2014 9:00pm
 |
 |  Description:  This program is the graphical interface that displays a cellular
 |				  automata animation based off of the logic provided from the Demon class.
 |				  Using the values that populate the 2D arrays of the Demon class, this program
 |				  pairs those numerical values (states) to colors provided by Java's color class. 
 |				  These colors occupy 3 pixels by 3 pixels on the screen and will change as a 3 by 3
 |			      cluster as the program runs. The animation of seen in the final result is essentially
 |				  the iteration of the Demon object as it follows Dewdney's ruleset for neighboring cells.
 |				  The iteration for-loop is delayed by 200 milliseconds to give the illusion of an animation
 |				  and for the results of the cyclical automata to be better observed by the user.
 |				  
 |				  
 |                
 | Deficiencies:  This program meets the standards it was designed for.
 *===========================================================================*/

import java.awt.Color;      // access Java's Color class
import java.util.concurrent.TimeUnit; // access Java's TimeUnit class


public class Prog5 {

	public static void main (String[] args){

		final int PIXEL_SIZE = 3;  // 'virtual' pixel size in real pixels
	    final int COLS = 100;        // x-dimension in Picture class
	    final int ROWS = 100;        // y-dimension "  "     
	    final int NUMBEROFSTATES = 13; // states that will be the values of the cell structure
	    // This is creating a 300x300 pixel window (as the PIXEL_SIZE and dimensions are multiplied).

       Picture  pic;       // creating a new Picture object
       Color [] palette =  // creating an array of Java colors
                 { Color.BLACK,  Color.BLUE, Color.CYAN, Color.DARK_GRAY, Color.GRAY, Color.GREEN, Color.LIGHT_GRAY,  
    		       Color.RED, Color.MAGENTA, Color.ORANGE, Color.PINK, Color.YELLOW, Color.WHITE };

         // Actual window is created (300 by 300 pixels)
         // because each pixel is being treated as a cluster of 9 pixels.
         pic = new Picture (COLS * PIXEL_SIZE, ROWS * PIXEL_SIZE);
	
         // Creates a new Demon object with the reference variable oldUniverse.
         Demon oldUniverse = new Demon(100, 100 ,NUMBEROFSTATES); 
    
    // establishes 250 iterations of cyclical space     
    for (int iteration = 0; iteration < 250; iteration++)
    {
   
       // To start each iteration, the current universe is set to the values of the latest 
       // 2D array universe (in this case oldUniverse)
       byte oldUniverseColorized [][] = oldUniverse.getUniverse();
       
       // advance() method is called to determine which cells must be "consumed"
       // according to the Dewdney ruleset.The result is store into oldUniverse which
       // be referenced by the getUniverse method above to be set for oldUniverseColorized
       oldUniverse.advance();

       			// Each array position is iterated in order to have color associated to 
       		    // each array state value 
       			for (int row = 0; row < ROWS; row++) {
       				for (int col = 0; col < COLS; col++) {


                    // Pull the color from the selected Demon array value 
       		        int color = ((byte)(oldUniverseColorized[row][col]));
       		 
       		        // Fills that color into the current position on the array,
       		        // (pixel size is accommodated for)
       		        // (0 is linked with the 0 position color in the pallete array above)
       		        for (int r = row*PIXEL_SIZE; r < (row+1)*PIXEL_SIZE; r++) {
       		        	for (int c = col*PIXEL_SIZE; c < (col+1)*PIXEL_SIZE; c++) {
       		        		pic.set(c,r,palette[color]); // c and r are reversed due to Java's
       		        								// handling of graphics (which is x axis, then y axis)
       		        	}
       		        } // end pallete selection iteration
       		        
       			}
       			}// end position iteration 
       				pic.show();   // call on the pic object
       				
       		// wait 200 milliseconds before printing the next version, so that an animation of
       		// the cyclical space is simulated		
       		 try {
        	TimeUnit.MILLISECONDS.sleep(200);
       		 } catch (InterruptedException e) { // Exception is caught due to the fact that
       			 								// otherwise it would throw an InterruptionException
       			 								// message and terminate the program.
       		System.out.println(e);}	  
       	
       	System.out.println("Just displayed Universe Version "+iteration);	 
       				
     } // end of iteration for-loop

	} // main   
	
} // Prog5  
       
