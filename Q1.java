
int[] pos = new int[2];
for(char i:nums)
if(i == 'S')
    pos[1]-=1;
else if(i == 'N')
    pos[1]+=1;
else if(i == 'E')
    pos[0]+=1;
else if(i == 'W')
    pos[0]-=1;

if(pos[0]==0 && pos[1]==1)
    return true;
else return false;
