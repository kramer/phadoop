_mkey = new org.apache.hadoop.io.Text();
_mvalue = new org.apache.hadoop.io.Text();
_if="org.apache.hadoop.mapreduce.lib.input.TextInputFormat";
_of="org.apache.hadoop.mapreduce.lib.output.TextOutputFormat";

function map(key, value, context){
    words = value.toString().split(' ');
    for(var i=0; i < words.length; i++) {
        var word = words[i];
        _key.set(word);
        _value.set('1');
        context.write(_key,_value);
    }
}

