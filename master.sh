 COUNTER=0
         while [  $COUNTER -lt 1 ]; do
                echo press 1 to register
                echo press 2 to loginn
                echo press 3 to log out
                echo press 4 to byebye
            read var;
           if [ $var -eq 1 ]
           then
           bash register.sh
           echo opening hello File
           sleep 3
            nano hello.txt
           fi
           if [ $var -eq 2 ]
           then
           bash login.sh
           fi
           if [ $var -eq 3 ]
           then
           bash logout.sh
           fi
           if [ $var -eq 4 ]
           then
           echo have a nicee dayy!bye
           COUNTER=3
           fi
           done
