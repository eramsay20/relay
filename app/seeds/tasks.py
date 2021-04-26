from app.models import db, Task
from datetime import date

today = date.today()


def seed_tasks():

    p1_task1 = Task(
        project_id=1,
        complete=False,
        title='ea dolore atque totam doloribus',
        user_id=1,
        due_date=today,
        description='Test description 1'
    )

    db.session.add(p1_task1)

    p1_task2 = Task(
        project_id=1,
        complete=False,
        title='ab consequuntur maxime sit ea',
        user_id=1,
        due_date=today,
        description='Test description 2'
    )

    db.session.add(p1_task2)

    p1_task3 = Task(
        project_id=1,
        complete=False,
        title='corrupti est ut sit repellendus',
        user_id=1,
        due_date=today,
        description='Test description 3'
    )

    db.session.add(p1_task3)

    p1_task4 = Task(
        project_id=1,
        complete=False,
        title='nemo tempore architecto iusto aut',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p1_task4)

    p1_task5 = Task(
        project_id=1,
        complete=False,
        title='omnis voluptas quia fugiat omnis',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p1_task5)

    p2_task1 = Task(
        project_id=2,
        complete=False,
        title='rerum perspiciatis cupiditate quis architecto',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p2_task1)

    p2_task2 = Task(
        project_id=2,
        complete=False,
        title='minus magni voluptatem doloremque sit',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p2_task2)

    p2_task3 = Task(
        project_id=2,
        complete=False,
        title='eaque deserunt rerum molestiae quod',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p2_task3)

    p2_task4 = Task(
        project_id=2,
        complete=False,
        title='exercitationem omnis magni rerum molestias',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p2_task4)

    p2_task5 = Task(
        project_id=2,
        complete=False,
        title='odio a labore eveniet excepturi',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p2_task5)

    p3_task1 = Task(
        project_id=3,
        complete=False,
        title='error cupiditate est minima est',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p3_task1)

    p3_task2 = Task(
        project_id=3,
        complete=False,
        title='distinctio reiciendis doloremque consequatur adipisci',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p3_task2)

    p3_task3 = Task(
        project_id=3,
        complete=False,
        title='cum quo quisquam architecto non',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p3_task3)

    p3_task4 = Task(
        project_id=3,
        complete=False,
        title='at omnis omnis veritatis sint',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p3_task4)

    p3_task5 = Task(
        project_id=3,
        complete=False,
        title='quaerat et non nam deserunt',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p3_task5)

    p4_task1 = Task(
        project_id=4,
        complete=False,
        title='odit necessitatibus enim aut maiores',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p4_task1)

    p4_task2 = Task(
        project_id=4,
        complete=False,
        title='ut quos fugiat et eos',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p4_task2)

    p4_task3 = Task(
        project_id=4,
        complete=False,
        title='et ipsam iste ut aut',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p4_task3)

    p4_task4 = Task(
        project_id=4,
        complete=False,
        title='provident at expedita repellendus magni',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p4_task4)

    p4_task5 = Task(
        project_id=4,
        complete=False,
        title='reiciendis voluptas aut cumque beatae',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p4_task5)

    p5_task1 = Task(
        project_id=5,
        complete=False,
        title='voluptatem est totam occaecati porro',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p5_task1)

    p5_task2 = Task(
        project_id=5,
        complete=False,
        title='quia deserunt aperiam eveniet eos',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p5_task2)

    p5_task3 = Task(
        project_id=5,
        complete=False,
        title='sed quod quibusdam accusantium fugiat',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p5_task3)

    p5_task4 = Task(
        project_id=5,
        complete=False,
        title='eaque repellat possimus qui dignissimos',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p5_task4)

    p5_task5 = Task(
        project_id=5,
        complete=False,
        title='aliquam consequatur ipsa adipisci veritatis',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p5_task5)

    p6_task1 = Task(
        project_id=6,
        complete=False,
        title='sint repellat laborum voluptate non',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p6_task1)

    p6_task2 = Task(
        project_id=6,
        complete=False,
        title='praesentium occaecati libero aut adipisci',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p6_task2)

    p6_task3 = Task(
        project_id=6,
        complete=False,
        title='autem temporibus accusamus beatae sint',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p6_task3)

    p6_task4 = Task(
        project_id=6,
        complete=False,
        title='reiciendis totam incidunt dolores culpa',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p6_task4)

    p6_task5 = Task(
        project_id=6,
        complete=False,
        title='non quisquam saepe ut ad',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p6_task5)

    p7_task1 = Task(
        project_id=7,
        complete=False,
        title='cum omnis enim quis quos',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p7_task1)

    p7_task2 = Task(
        project_id=7,
        complete=False,
        title='magnam exercitationem debitis molestiae et',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p7_task2)

    p7_task3 = Task(
        project_id=7,
        complete=False,
        title='quae temporibus voluptates voluptatum consequatur',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p7_task3)

    p7_task4 = Task(
        project_id=7,
        complete=False,
        title='sequi aspernatur occaecati sint non',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p7_task4)

    p7_task5 = Task(
        project_id=7,
        complete=False,
        title='animi dolorum natus tenetur sit',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p7_task5)

    p8_task1 = Task(
        project_id=8,
        complete=False,
        title='magnam maxime ut rerum neque',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p8_task1)

    p8_task2 = Task(
        project_id=8,
        complete=False,
        title='deserunt soluta est velit culpa',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p8_task2)

    p8_task3 = Task(
        project_id=8,
        complete=False,
        title='voluptatem nesciunt ratione amet aut',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p8_task3)

    p8_task4 = Task(
        project_id=8,
        complete=False,
        title='qui et sed quaerat qui',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p8_task4)

    p8_task5 = Task(
        project_id=8,
        complete=False,
        title='recusandae possimus in dolores odio',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p8_task5)

    p9_task1 = Task(
        project_id=9,
        complete=False,
        title='rem dolorem sit voluptas quod',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p9_task1)

    p9_task2 = Task(
        project_id=9,
        complete=False,
        title='alias et qui id aut',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p9_task2)

    p9_task3 = Task(
        project_id=9,
        complete=False,
        title='sit voluptate omnis eveniet nisi',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p9_task3)

    p9_task4 = Task(
        project_id=9,
        complete=False,
        title='ut fugit odit est ducimus',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p9_task4)

    p9_task5 = Task(
        project_id=9,
        complete=False,
        title='quae id rem quos id',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p9_task5)

    p10_task1 = Task(
        project_id=10,
        complete=False,
        title='placeat culpa sequi fuga quia',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p10_task1)

    p10_task2 = Task(
        project_id=10,
        complete=False,
        title='nobis iste qui adipisci aut',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p10_task2)

    p10_task3 = Task(
        project_id=10,
        complete=False,
        title='temporibus minima ipsa sed et',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p10_task3)

    p10_task4 = Task(
        project_id=10,
        complete=False,
        title='excepturi ut ipsam explicabo ut',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p10_task4)

    p10_task5 = Task(
        project_id=10,
        complete=False,
        title='deleniti ut officiis aliquid aperiam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p10_task5)

    p11_task1 = Task(
        project_id=11,
        complete=False,
        title='excepturi illo est soluta voluptatibus',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p11_task1)

    p11_task2 = Task(
        project_id=11,
        complete=False,
        title='itaque non sit nesciunt et',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p11_task2)

    p11_task3 = Task(
        project_id=11,
        complete=False,
        title='vitae voluptatibus atque temporibus ut',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p11_task3)

    p11_task4 = Task(
        project_id=11,
        complete=False,
        title='praesentium ut voluptates dolor qui',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p11_task4)

    p11_task5 = Task(
        project_id=11,
        complete=False,
        title='ea vitae provident dolorem fugiat',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p11_task5)

    p12_task1 = Task(
        project_id=12,
        complete=False,
        title='repudiandae velit adipisci doloribus qui',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p12_task1)

    p12_task2 = Task(
        project_id=12,
        complete=False,
        title='assumenda minima et quia voluptas',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p12_task2)

    p12_task3 = Task(
        project_id=12,
        complete=False,
        title='cupiditate fugit aut laborum occaecati',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p12_task3)

    p12_task4 = Task(
        project_id=12,
        complete=False,
        title='recusandae unde autem et sint',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p12_task4)

    p12_task5 = Task(
        project_id=12,
        complete=False,
        title='aliquid assumenda qui porro non',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p12_task5)

    p13_task1 = Task(
        project_id=13,
        complete=False,
        title='vero porro voluptas quod ab',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p13_task1)

    p13_task2 = Task(
        project_id=13,
        complete=False,
        title='mollitia ex magni animi facere',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p13_task2)

    p13_task3 = Task(
        project_id=13,
        complete=False,
        title='repudiandae voluptas ea molestiae omnis',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p13_task3)

    p13_task4 = Task(
        project_id=13,
        complete=False,
        title='sit deserunt velit ab rerum',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p13_task4)

    p13_task5 = Task(
        project_id=13,
        complete=False,
        title='et facere eaque rerum non',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p13_task5)

    p14_task1 = Task(
        project_id=14,
        complete=False,
        title='quidem autem aut temporibus cumque',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p14_task1)

    p14_task2 = Task(
        project_id=14,
        complete=False,
        title='provident temporibus earum quia laboriosam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p14_task2)

    p14_task3 = Task(
        project_id=14,
        complete=False,
        title='eum ut voluptatem qui vel',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p14_task3)

    p14_task4 = Task(
        project_id=14,
        complete=False,
        title='saepe aspernatur sunt fuga ratione',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p14_task4)

    p14_task5 = Task(
        project_id=14,
        complete=False,
        title='quidem aut rerum voluptatem corrupti',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p14_task5)

    p15_task1 = Task(
        project_id=15,
        complete=False,
        title='odio officiis vitae deleniti non',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p15_task1)

    p15_task2 = Task(
        project_id=15,
        complete=False,
        title='ex rem sint autem aut',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p15_task2)

    p15_task3 = Task(
        project_id=15,
        complete=False,
        title='quia animi quisquam consequatur recusandae',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p15_task3)

    p15_task4 = Task(
        project_id=15,
        complete=False,
        title='sit facilis qui ullam ullam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p15_task4)

    p15_task5 = Task(
        project_id=15,
        complete=False,
        title='quia non maiores voluptatum deserunt',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p15_task5)

    p16_task1 = Task(
        project_id=16,
        complete=False,
        title='quisquam sed et aspernatur et',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p16_task1)

    p16_task2 = Task(
        project_id=16,
        complete=False,
        title='nostrum magni a aut fugiat',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p16_task2)

    p16_task3 = Task(
        project_id=16,
        complete=False,
        title='dolorem est aut dignissimos esse',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p16_task3)

    p16_task4 = Task(
        project_id=16,
        complete=False,
        title='voluptates veniam labore in modi',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p16_task4)

    p16_task5 = Task(
        project_id=16,
        complete=False,
        title='non est ea consectetur perferendis',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p16_task5)

    p17_task1 = Task(
        project_id=17,
        complete=False,
        title='nulla porro et expedita possimus',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p17_task1)

    p17_task2 = Task(
        project_id=17,
        complete=False,
        title='rerum similique possimus et rerum',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p17_task2)

    p17_task3 = Task(
        project_id=17,
        complete=False,
        title='doloribus quae asperiores fugit soluta',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p17_task3)

    p17_task4 = Task(
        project_id=17,
        complete=False,
        title='aut perferendis blanditiis corrupti aliquid',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p17_task4)

    p17_task5 = Task(
        project_id=17,
        complete=False,
        title='consequatur corporis autem neque et',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p17_task5)

    p18_task1 = Task(
        project_id=18,
        complete=False,
        title='ut dolores dolores autem maiores',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p18_task1)

    p18_task2 = Task(
        project_id=18,
        complete=False,
        title='totam aut sit incidunt et',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p18_task2)

    p18_task3 = Task(
        project_id=18,
        complete=False,
        title='architecto accusamus at commodi eum',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p18_task3)

    p18_task4 = Task(
        project_id=18,
        complete=False,
        title='sed repellat aut est aliquam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p18_task4)

    p18_task5 = Task(
        project_id=18,
        complete=False,
        title='neque sit asperiores qui dolorem',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p18_task5)

    p19_task1 = Task(
        project_id=19,
        complete=False,
        title='sit repudiandae qui quos laboriosam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p19_task1)

    p19_task2 = Task(
        project_id=19,
        complete=False,
        title='consequatur est voluptatem saepe blanditiis',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p19_task2)

    p19_task3 = Task(
        project_id=19,
        complete=False,
        title='excepturi voluptatem tenetur ipsa autem',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p19_task3)

    p19_task4 = Task(
        project_id=19,
        complete=False,
        title='officiis inventore qui eligendi totam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p19_task4)

    p19_task5 = Task(
        project_id=19,
        complete=False,
        title='eveniet amet perspiciatis ipsa sit',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p19_task5)

    p20_task1 = Task(
        project_id=20,
        complete=False,
        title='aspernatur in vero ratione et',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p20_task1)

    p20_task2 = Task(
        project_id=20,
        complete=False,
        title='expedita nemo est veniam quam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p20_task2)

    p20_task3 = Task(
        project_id=20,
        complete=False,
        title='omnis aut quas libero quod',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p20_task3)

    p20_task4 = Task(
        project_id=20,
        complete=False,
        title='aut est omnis quis quia',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p20_task4)

    p20_task5 = Task(
        project_id=20,
        complete=False,
        title='voluptatem aut et iusto tenetur',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p20_task5)

    p21_task1 = Task(
        project_id=21,
        complete=False,
        title='vel est ducimus quibusdam modi',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p21_task1)

    p21_task2 = Task(
        project_id=21,
        complete=False,
        title='rem illum possimus dolore aperiam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p21_task2)

    p21_task3 = Task(
        project_id=21,
        complete=False,
        title='totam est assumenda veniam sit',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p21_task3)

    p21_task4 = Task(
        project_id=21,
        complete=False,
        title='est nemo fugiat deleniti libero',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p21_task4)

    p21_task5 = Task(
        project_id=21,
        complete=False,
        title='earum ad unde dolores nesciunt',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p21_task5)

    p22_task1 = Task(
        project_id=22,
        complete=False,
        title='quia at debitis aut rerum',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p22_task1)

    p22_task2 = Task(
        project_id=22,
        complete=False,
        title='doloremque vero rerum soluta rerum',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p22_task2)

    p22_task3 = Task(
        project_id=22,
        complete=False,
        title='fuga reprehenderit quo delectus rerum',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p22_task3)

    p22_task4 = Task(
        project_id=22,
        complete=False,
        title='rerum tempora officiis quia aut',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p22_task4)

    p22_task5 = Task(
        project_id=22,
        complete=False,
        title='eos aut ab temporibus fuga',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p22_task5)

    p23_task1 = Task(
        project_id=23,
        complete=False,
        title='et quibusdam sed vel quibusdam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p23_task1)

    p23_task2 = Task(
        project_id=23,
        complete=False,
        title='placeat rem rem qui omnis',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p23_task2)

    p23_task3 = Task(
        project_id=23,
        complete=False,
        title='saepe corporis eos sed a',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p23_task3)

    p23_task4 = Task(
        project_id=23,
        complete=False,
        title='debitis debitis et ipsam aspernatur',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p23_task4)

    p23_task5 = Task(
        project_id=23,
        complete=False,
        title='tenetur similique perspiciatis quidem amet',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p23_task5)

    p24_task1 = Task(
        project_id=24,
        complete=False,
        title='illum temporibus nobis autem delectus',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p24_task1)

    p24_task2 = Task(
        project_id=24,
        complete=False,
        title='explicabo exercitationem aperiam est consequatur',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p24_task2)

    p24_task3 = Task(
        project_id=24,
        complete=False,
        title='veniam adipisci autem nemo voluptatem',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p24_task3)

    p24_task4 = Task(
        project_id=24,
        complete=False,
        title='voluptatem illo est cumque eos',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p24_task4)

    p24_task5 = Task(
        project_id=24,
        complete=False,
        title='sit dolor asperiores itaque id',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p24_task5)

    p25_task1 = Task(
        project_id=25,
        complete=False,
        title='dolor veritatis et placeat veniam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p25_task1)

    p25_task2 = Task(
        project_id=25,
        complete=False,
        title='tenetur et dolor ut earum',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p25_task2)

    p25_task3 = Task(
        project_id=25,
        complete=False,
        title='architecto ut quia rerum labore',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p25_task3)

    p25_task4 = Task(
        project_id=25,
        complete=False,
        title='voluptas incidunt aut quasi qui',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p25_task4)

    p25_task5 = Task(
        project_id=25,
        complete=False,
        title='non dolores hic illo tempore',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p25_task5)

    p26_task1 = Task(
        project_id=26,
        complete=False,
        title='provident assumenda recusandae ea quia',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p26_task1)

    p26_task2 = Task(
        project_id=26,
        complete=False,
        title='accusantium error dolorum voluptas atque',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p26_task2)

    p26_task3 = Task(
        project_id=26,
        complete=False,
        title='ratione molestias dolor fugiat alias',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p26_task3)

    p26_task4 = Task(
        project_id=26,
        complete=False,
        title='molestiae explicabo pariatur voluptatem recusandae',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p26_task4)

    p26_task5 = Task(
        project_id=26,
        complete=False,
        title='rerum tenetur necessitatibus quia quia',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p26_task5)

    p27_task1 = Task(
        project_id=27,
        complete=False,
        title='numquam qui numquam quia consequatur',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p27_task1)

    p27_task2 = Task(
        project_id=27,
        complete=False,
        title='repellendus ut voluptate consequatur nam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p27_task2)

    p27_task3 = Task(
        project_id=27,
        complete=False,
        title='dolorum sunt voluptatem magni quibusdam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p27_task3)

    p27_task4 = Task(
        project_id=27,
        complete=False,
        title='pariatur nihil veniam perspiciatis ullam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p27_task4)

    p27_task5 = Task(
        project_id=27,
        complete=False,
        title='blanditiis et laudantium voluptas optio',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p27_task5)

    p28_task1 = Task(
        project_id=28,
        complete=False,
        title='dicta accusamus pariatur ipsam quia',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p28_task1)

    p28_task2 = Task(
        project_id=28,
        complete=False,
        title='illum nisi aliquam ipsum doloremque',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p28_task2)

    p28_task3 = Task(
        project_id=28,
        complete=False,
        title='id praesentium repellendus eius libero',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p28_task3)

    p28_task4 = Task(
        project_id=28,
        complete=False,
        title='dolores et sed earum labore',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p28_task4)

    p28_task5 = Task(
        project_id=28,
        complete=False,
        title='molestiae mollitia deleniti fugiat et',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p28_task5)

    p29_task1 = Task(
        project_id=29,
        complete=False,
        title='quos soluta et quibusdam rerum',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p29_task1)

    p29_task2 = Task(
        project_id=29,
        complete=False,
        title='laborum eum velit vel repellat',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p29_task2)

    p29_task3 = Task(
        project_id=29,
        complete=False,
        title='voluptatem molestiae voluptatem fuga et',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p29_task3)

    p29_task4 = Task(
        project_id=29,
        complete=False,
        title='sed molestiae doloremque ipsam sed',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p29_task4)

    p29_task5 = Task(
        project_id=29,
        complete=False,
        title='est tempora explicabo eos alias',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p29_task5)

    p30_task1 = Task(
        project_id=30,
        complete=False,
        title='molestias error totam tempora id',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p30_task1)

    p30_task2 = Task(
        project_id=30,
        complete=False,
        title='culpa velit ea et suscipit',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p30_task2)

    p30_task3 = Task(
        project_id=30,
        complete=False,
        title='libero voluptate optio et vel',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p30_task3)

    p30_task4 = Task(
        project_id=30,
        complete=False,
        title='voluptatem magnam dolorem ex ea',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p30_task4)

    p30_task5 = Task(
        project_id=30,
        complete=False,
        title='sapiente et perferendis beatae numquam',
        user_id=None,
        due_date=None,
        description=None
    )

    db.session.add(p30_task5)

    db.session.commit()


def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()
