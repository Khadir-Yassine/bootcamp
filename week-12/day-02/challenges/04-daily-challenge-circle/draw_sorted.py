"""Optional turtle extension. Requires a desktop with Tk support."""
from circle import Circle

def draw_sorted(circles):
    import turtle
    circles = sorted(circles)
    screen = turtle.Screen()
    screen.title("Circles sorted by radius")
    pen = turtle.Turtle()
    pen.speed(0)
    total = sum(circle.diameter + 20 for circle in circles)
    x = -total / 2
    for circle in circles:
        pen.penup()
        pen.goto(x + circle.radius, -circle.radius)
        pen.pendown()
        pen.circle(circle.radius)
        pen.penup()
        pen.goto(x + circle.radius, -circle.radius - 25)
        pen.write(f"r={circle.radius:g}", align="center")
        x += circle.diameter + 20
    pen.hideturtle()
    screen.exitonclick()

if __name__ == "__main__":
    draw_sorted([Circle(55), Circle(20), Circle(diameter=70)])
