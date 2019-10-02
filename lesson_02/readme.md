LineBasicMaterial( parameters: {
    Color: 线条的颜色，用16进制来表示，默认的颜色是白色。

    Linewidth: 线条的宽度，默认时候1个单位宽度。 # WebGL 渲染是看不出的，只有Canvas 渲染有

    Linecap: 线条两端的外观，默认是圆角端点。

    Linejoin: 两个线条的连接点处的外观，默认是“round”，表示圆角。

    VertexColors: 定义线条材质是否使用顶点颜色，这是一个boolean值。意思是，线条各部分的颜色会根据顶点的颜色来进行插值。

    Fog: 定义材质的颜色是否受全局雾效的影响。
})
