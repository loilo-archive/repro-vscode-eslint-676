foo = 'bar'
// ^- foo is correctly reported as unused

alert('baz')
// ^- alert is incorrectly reported as unused even though the browser
//    environment should be applied through workspace settings
