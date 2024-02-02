const data = [
    {
        letter: 'A',
        info: '1. Start by extending your dominant hand\'s fingers together and keeping your thumb tucked in against your palm.\n' +
        '2. Next, bend your fingers slightly at the knuckles, but keep them close together.\n' +
        '3. Take your thumb and touch it to the side of your index finger, near the base but not at the tip. Your thumb and index finger should form a circular shape.\n' +
        '4. Make sure your other fingers remain straight and together, not touching your thumb or index finger.\n'
    },
    {
        letter: 'B',
        info: '1. Start with your dominant hand in a fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Keep your index finger extended and your other fingers curled inwards towards your palm.\n' +
        '3. Your thumb and index finger should form an L-shape, with the thumb pointing upward and the index finger pointing straight out.\n' +
        '4. Hold the position steady, maintaining the shape of the letter B.\n'
    },
    {
        letter: 'C',
        info: '1. Start with your dominant hand in a fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Curl your index, middle, and ring fingers down towards your palm, while keeping your pinky finger and thumb extended.\n' +
        '3. The extended thumb and pinky finger should form a curved shape, resembling the letter C.\n' +
        '4. Hold the position steady, maintaining the shape of the letter C.\n'
    },
    {
        letter: 'D',
        info: '1. Start with your dominant hand in a fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Curl your index, middle, and ring fingers down towards your palm, while keeping your pinky finger and thumb extended.\n' +
        '3. The extended thumb and pinky finger should form a straight line, parallel to each other.\n' +
        '4. Hold the position steady, maintaining the shape of the letter D.\n'
    },
    {
        letter: 'E',
        info: '1. Start with your dominant hand in a fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index, middle, and ring fingers straight up, while keeping your pinky finger and thumb extended.\n' +
        '3. The extended index, middle, and ring fingers should be parallel to each other and spaced apart.\n' +
        '4. Hold the position steady, maintaining the shape of the letter E.\n'
    }, 
    {
        letter: 'F',
        info: '1. Start with your dominant hand in a fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index and middle fingers straight up, while keeping your thumb, ring finger, and pinky finger extended.\n' +
        '3. The extended index and middle fingers should be parallel to each other and spaced apart.\n' +
        '4. Hold the position steady, maintaining the shape of the letter F.\n'
    },
    {
        letter: 'G',
        info: '1. Start with your dominant hand in a fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index, middle, and ring fingers straight up, while keeping your thumb, and pinky finger extended.\n' +
        '3. Curl your pinky finger down towards your palm, forming a hook-like shape.\n' +
        '4. Hold the position steady, maintaining the shape of the letter G.\n'
    },
    {
        letter: 'H',
        info: '1. Start with your dominant hand in a fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index, middle, and ring fingers straight up, while keeping your thumb and pinky finger extended.\n' +
        '3. The extended index, middle, and ring fingers should be parallel to each other and spaced apart.\n' +
        '4. Hold the position steady, maintaining the shape of the letter H.\n'
    },
    {
        letter: 'I',
        info: '1. Start with your dominant hand in a fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index finger straight up, while keeping your thumb and other fingers curled into your palm.\n' +
        '3. The extended index finger should be held upright and straight.\n' +
        '4. Hold the position steady, maintaining the shape of the letter I.\n'
    },
    {
        letter: 'J',
        info: '1. Start with your dominant hand in a fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index finger straight up, while keeping your thumb and other fingers curled into your palm.\n' +
        '3. Bend your extended index finger at the knuckle, creating a hook-like shape.\n' +
        '4. Hold the position steady, maintaining the shape of the letter J.\n'
    },
    {
        letter: 'K',
        info: '1. Start with your dominant hand in a fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index and middle fingers straight up, while keeping your thumb and other fingers curled into your palm.\n' +
        '3. The extended index and middle fingers should be kept together and parallel to each other.\n' +
        '4. Hold the position steady, maintaining the shape of the letter K.\n'
    },
    {
        letter: 'L',
        info: '1. Start with your dominant hand in a fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index finger straight up, while keeping your thumb and other fingers curled into your palm.\n' +
        '3. The extended index finger should be held upright and straight.\n' +
        '4. Hold the position steady, maintaining the shape of the letter L.\n'
    },
    {
        letter: 'M',
        info: '1. Start with your dominant hand in a fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your thumb and pinky finger outwards, while keeping your other fingers curled into your palm.\n' +
        '3. The extended thumb and pinky finger should be spaced apart, forming two parallel lines.\n' +
        '4. Hold the position steady, maintaining the shape of the letter M.\n'
    },
    {
        letter: 'N',
        info: '1. Start with your dominant hand in a fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your thumb and index finger outwards, while keeping your other fingers curled into your palm.\n' +
        '3. The extended thumb and index finger should be spaced apart, forming two parallel lines.\n' +
        '4. Hold the position steady, maintaining the shape of the letter N.\n'
    },
    {
        letter: 'O',
        info: '1. Start with your dominant hand in a relaxed fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Curl all your fingers, including the thumb, over towards your palm, creating a closed circle or "O" shape.\n' +
        '3. The tips of your fingers should touch the base of your thumb, forming a complete circle.\n' +
        '4. Hold the position steady, maintaining the shape of the letter O.\n'
    },
    {
        letter: 'P',
        info: '1. Start with your dominant hand in a relaxed fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index, middle, and ring fingers straight up, while keeping your thumb and pinky finger curled into your palm.\n' +
        '3. The extended fingers should be held together and parallel to each other.\n' +
        '4. Hold the position steady, maintaining the shape of the letter P.\n'
    },
    {
        letter: 'Q',
        info: '1. Make a relaxed fist with your dominant hand and extend your thumb outwards against your index finger.\n' +
        '2. Straighten your thumb, index finger, and middle finger, keeping other fingers curled.\n' +
        '3. Hold extended thumb, index finger, and middle finger together and parallel.\n' +
        '4. Curl your pinky finger down, forming a hook-like shape.\n' +
        '5. Steadily maintain the shape of the letter Q.'
    },
    {
        letter: 'R',
        info: '1. Start with your dominant hand in a relaxed fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index and middle fingers straight up, while keeping your thumb and other fingers curled into your palm.\n' +
        '3. The extended index and middle fingers should be held together and slightly bent at the knuckles.\n' +
        '4. Hold the position steady, maintaining the shape of the letter R.\n'
    },
    {
        letter: 'S',
        info: '1. Start with your dominant hand in a relaxed fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index and middle fingers straight up, while keeping your thumb and other fingers curled into your palm.\n' +
        '3. Curve your extended index and middle fingers slightly, forming a gentle "S" shape.\n' +
        '4. Hold the position steady, maintaining the shape of the letter S.\n'
    },
    {
        letter: 'T',
        info: '1. Start with your dominant hand in a relaxed fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index finger straight up, while keeping your thumb and other fingers curled into your palm.\n' +
        '3. The extended index finger should be held upright and straight.\n' +
        '4. Hold the position steady, maintaining the shape of the letter T.\n'
    },
    {
        letter: 'U',
        info: '1. Start with your dominant hand in a relaxed fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index, middle, and ring fingers straight up, while keeping your thumb and pinky finger curled into your palm.\n' +
        '3. The extended fingers should be held together and parallel to each other.\n' +
        '4. Hold the position steady, maintaining the shape of the letter U.\n'
    },
    {
        letter: 'V',
        info: '1. Start with your dominant hand in a relaxed fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index and middle fingers outwards and slightly apart, while keeping your other fingers curled into your palm.\n' +
        '3. The extended index and middle fingers should form a V-shape.\n' +
        '4. Hold the position steady, maintaining the shape of the letter V.\n'
    },
    {
        letter: 'W',
        info: '1. Start with your dominant hand in a relaxed fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your thumb, index, middle, and ring fingers outwards and slightly apart, while keeping your pinky finger curled into your palm.\n' +
        '3. The extended fingers should form a W-shape with the thumb and index finger slightly closer together and the middle and ring fingers slightly spread apart.\n' +
        '4. Hold the position steady, maintaining the shape of the letter W.\n'
    },
    {
        letter: 'X',
        info: '1. Start with your dominant hand in a relaxed fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Cross your index finger over your middle finger, forming an X shape.\n' +
        '3. Keep your other fingers curled into your palm.\n' +
        '4. Hold the position steady, maintaining the shape of the letter X.\n'
    },
    {
        letter: 'Y',
        info: '1. Start with your dominant hand in a relaxed fist, with your thumb extended outwards and resting against the side of your index finger.\n' +
        '2. Extend your index and middle fingers outwards and slightly apart, while keeping your other fingers curled into your palm.\n' +
        '3. The extended index and middle fingers should be angled slightly upwards, forming a V-shape.\n' +
        '4. Hold the position steady, maintaining the shape of the letter Y.\n'
    },
    {
        letter: 'Z',
        info: '1. Start with your dominant hand raised in front of you, palm facing downwards.\n' +
        '2. Begin at the top left side and trace a diagonal line down towards the bottom right side, slanting to the right as you go.\n' +
        '3. Once you reach the bottom right side, quickly change direction and trace a diagonal line from the bottom right side to the top left side, slanting to the left as you go.\n' +
        '4. The two diagonal lines should intersect near the center, forming a \'Z\' shape.\n'
    },
  ]

export const getLessonInfo = (letter) => {
    const letterData = data.find((item) => item.letter === letter)
    return letterData ? letterData.info : ''
} 