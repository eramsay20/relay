from app.models import db, Comment


def seed_comments():

    task1_comment1 = Comment(
        user_id=1,
        task_id=1,
        comment='Thought we already decided on a new flow?'
    )

    db.session.add(task1_comment1)

    task1_comment2 = Comment(
        user_id=2,
        task_id=1,
        comment='Mmm yes, lets figure this out'
    )

    db.session.add(task1_comment2)

    task2_comment1 = Comment(
        user_id=1,
        task_id=2,
        comment='who is Tyler?'
    )

    db.session.add(task2_comment1)

    task2_comment2 = Comment(
        user_id=2,
        task_id=2,
        comment='guys been missing access for days...'
    )

    db.session.add(task2_comment2)

    task3_comment1 = Comment(
        user_id=1,
        task_id=3,
        comment='finally!'
    )

    db.session.add(task3_comment1)

    task3_comment2 = Comment(
        user_id=2,
        task_id=3,
        comment='what about my DOGE coin?'
    )

    db.session.add(task3_comment2)

    task4_comment1 = Comment(
        user_id=1,
        task_id=4,
        comment='plz dont assign me...'
    )

    db.session.add(task4_comment1)

    task4_comment2 = Comment(
        user_id=2,
        task_id=4,
        comment='thought I was the only one who could hear it...'
    )

    db.session.add(task4_comment2)

    task5_comment1 = Comment(
        user_id=1,
        task_id=5,
        comment='not much to go on...'
    )

    db.session.add(task5_comment1)

    task5_comment2 = Comment(
        user_id=2,
        task_id=5,
        comment='aaaaand now its stuck in my head.'
    )

    db.session.add(task5_comment2)

    task6_comment1 = Comment(
        user_id=1,
        task_id=6,
        comment='ea aliquam hic facilis delectus provident aut deleniti'
    )

    db.session.add(task6_comment1)

    task6_comment2 = Comment(
        user_id=2,
        task_id=6,
        comment='veniam quisquam molestias consequatur repudiandae autem illum quia'
    )

    db.session.add(task6_comment2)

    task7_comment1 = Comment(
        user_id=1,
        task_id=7,
        comment='ducimus numquam illo est placeat corporis accusamus quis'
    )

    db.session.add(task7_comment1)

    task7_comment2 = Comment(
        user_id=2,
        task_id=7,
        comment='aut esse ipsa voluptatem numquam sed qui amet'
    )

    db.session.add(task7_comment2)

    task8_comment1 = Comment(
        user_id=1,
        task_id=8,
        comment='ad ut qui repellat magni id nobis odio'
    )

    db.session.add(task8_comment1)

    task8_comment2 = Comment(
        user_id=2,
        task_id=8,
        comment='modi dolor doloremque ea quo minima dolore ut'
    )

    db.session.add(task8_comment2)

    task9_comment1 = Comment(
        user_id=1,
        task_id=9,
        comment='nemo officia accusamus perferendis occaecati pariatur corrupti est'
    )

    db.session.add(task9_comment1)

    task9_comment2 = Comment(
        user_id=2,
        task_id=9,
        comment='deserunt odit cumque beatae non temporibus magnam necessitatibus'
    )

    db.session.add(task9_comment2)

    task10_comment1 = Comment(
        user_id=1,
        task_id=10,
        comment='eaque est fugit quis quae rem consequatur quo'
    )

    db.session.add(task10_comment1)

    task10_comment2 = Comment(
        user_id=2,
        task_id=10,
        comment='veniam totam dolorem maxime et nemo quae quia'
    )

    db.session.add(task10_comment2)

    task11_comment1 = Comment(
        user_id=1,
        task_id=11,
        comment='corporis id distinctio autem porro est blanditiis aspernatur'
    )

    db.session.add(task11_comment1)

    task11_comment2 = Comment(
        user_id=2,
        task_id=11,
        comment='eaque quam repellendus est voluptas quas magni consequatur'
    )

    db.session.add(task11_comment2)

    task12_comment1 = Comment(
        user_id=1,
        task_id=12,
        comment='provident dolorem sequi quo distinctio sit quo perspiciatis'
    )

    db.session.add(task12_comment1)

    task12_comment2 = Comment(
        user_id=2,
        task_id=12,
        comment='deserunt et doloribus non itaque qui sed quos'
    )

    db.session.add(task12_comment2)

    task13_comment1 = Comment(
        user_id=1,
        task_id=13,
        comment='quidem ut ratione ut doloribus sed pariatur velit'
    )

    db.session.add(task13_comment1)

    task13_comment2 = Comment(
        user_id=2,
        task_id=13,
        comment='incidunt tempora sit sunt illo dicta quasi nihil'
    )

    db.session.add(task13_comment2)

    task14_comment1 = Comment(
        user_id=1,
        task_id=14,
        comment='omnis explicabo dicta soluta aperiam est quis eum'
    )

    db.session.add(task14_comment1)

    task14_comment2 = Comment(
        user_id=2,
        task_id=14,
        comment='sequi dolor distinctio pariatur unde praesentium qui aut'
    )

    db.session.add(task14_comment2)

    task15_comment1 = Comment(
        user_id=1,
        task_id=15,
        comment='aut error voluptatum ea quibusdam ipsa dolorum aut'
    )

    db.session.add(task15_comment1)

    task15_comment2 = Comment(
        user_id=2,
        task_id=15,
        comment='corporis veritatis nesciunt quo quas cum placeat voluptatum'
    )

    db.session.add(task15_comment2)

    task16_comment1 = Comment(
        user_id=1,
        task_id=16,
        comment='iusto corrupti praesentium sapiente ut ex exercitationem ex'
    )

    db.session.add(task16_comment1)

    task16_comment2 = Comment(
        user_id=2,
        task_id=16,
        comment='ea hic sit ut voluptatum aut magnam neque'
    )

    db.session.add(task16_comment2)

    task17_comment1 = Comment(
        user_id=1,
        task_id=17,
        comment='sed ratione illo iusto fugiat et vel eum'
    )

    db.session.add(task17_comment1)

    task17_comment2 = Comment(
        user_id=2,
        task_id=17,
        comment='rerum omnis vel excepturi officia earum a odio'
    )

    db.session.add(task17_comment2)

    task18_comment1 = Comment(
        user_id=1,
        task_id=18,
        comment='vel ad sequi accusantium perferendis nobis natus repellat'
    )

    db.session.add(task18_comment1)

    task18_comment2 = Comment(
        user_id=2,
        task_id=18,
        comment='exercitationem id et necessitatibus doloribus minus excepturi hic'
    )

    db.session.add(task18_comment2)

    task19_comment1 = Comment(
        user_id=1,
        task_id=19,
        comment='et error modi eum eos deserunt consequatur numquam'
    )

    db.session.add(task19_comment1)

    task19_comment2 = Comment(
        user_id=2,
        task_id=19,
        comment='nemo fugiat similique at repudiandae rerum sint laboriosam'
    )

    db.session.add(task19_comment2)

    task20_comment1 = Comment(
        user_id=1,
        task_id=20,
        comment='ipsa sint sit quia impedit aliquam corporis et'
    )

    db.session.add(task20_comment1)

    task20_comment2 = Comment(
        user_id=2,
        task_id=20,
        comment='voluptas laboriosam enim enim rem aut qui et'
    )

    db.session.add(task20_comment2)

    task21_comment1 = Comment(
        user_id=1,
        task_id=21,
        comment='reprehenderit et et iste minus nihil eos esse'
    )

    db.session.add(task21_comment1)

    task21_comment2 = Comment(
        user_id=2,
        task_id=21,
        comment='delectus unde et explicabo facere voluptas et minus'
    )

    db.session.add(task21_comment2)

    task22_comment1 = Comment(
        user_id=1,
        task_id=22,
        comment='quisquam nobis voluptas sapiente id in hic iusto'
    )

    db.session.add(task22_comment1)

    task22_comment2 = Comment(
        user_id=2,
        task_id=22,
        comment='laudantium voluptas vel dolorem quod dolorum laboriosam tempore'
    )

    db.session.add(task22_comment2)

    task23_comment1 = Comment(
        user_id=1,
        task_id=23,
        comment='veritatis quae reprehenderit perspiciatis harum aut animi voluptatibus'
    )

    db.session.add(task23_comment1)

    task23_comment2 = Comment(
        user_id=2,
        task_id=23,
        comment='totam cum deserunt placeat id ipsam et consequatur'
    )

    db.session.add(task23_comment2)

    task24_comment1 = Comment(
        user_id=1,
        task_id=24,
        comment='voluptatibus quibusdam iure quaerat cum itaque asperiores eum'
    )

    db.session.add(task24_comment1)

    task24_comment2 = Comment(
        user_id=2,
        task_id=24,
        comment='consequatur sit ipsa quasi aliquam sit voluptas omnis'
    )

    db.session.add(task24_comment2)

    task25_comment1 = Comment(
        user_id=1,
        task_id=25,
        comment='sed aspernatur laudantium ullam atque corporis nihil suscipit'
    )

    db.session.add(task25_comment1)

    task25_comment2 = Comment(
        user_id=2,
        task_id=25,
        comment='laudantium nobis perspiciatis labore nihil quod sit velit'
    )

    db.session.add(task25_comment2)

    task26_comment1 = Comment(
        user_id=1,
        task_id=26,
        comment='officia sint delectus voluptatem itaque doloribus aperiam libero'
    )

    db.session.add(task26_comment1)

    task26_comment2 = Comment(
        user_id=2,
        task_id=26,
        comment='nisi ullam qui sunt ut sunt occaecati voluptatem'
    )

    db.session.add(task26_comment2)

    task27_comment1 = Comment(
        user_id=1,
        task_id=27,
        comment='nam deserunt quod ipsam aliquid asperiores ullam sint'
    )

    db.session.add(task27_comment1)

    task27_comment2 = Comment(
        user_id=2,
        task_id=27,
        comment='laboriosam itaque velit sunt est voluptatum sapiente eos'
    )

    db.session.add(task27_comment2)

    task28_comment1 = Comment(
        user_id=1,
        task_id=28,
        comment='sed ea necessitatibus fugit placeat est asperiores molestias'
    )

    db.session.add(task28_comment1)

    task28_comment2 = Comment(
        user_id=2,
        task_id=28,
        comment='cum eum voluptate et saepe consequatur tempore ipsam'
    )

    db.session.add(task28_comment2)

    task29_comment1 = Comment(
        user_id=1,
        task_id=29,
        comment='ratione ut molestias dolores et ullam magni alias'
    )

    db.session.add(task29_comment1)

    task29_comment2 = Comment(
        user_id=2,
        task_id=29,
        comment='doloremque necessitatibus itaque est aperiam asperiores earum amet'
    )

    db.session.add(task29_comment2)

    task30_comment1 = Comment(
        user_id=1,
        task_id=30,
        comment='sint facere ut in cum debitis odio aut'
    )

    db.session.add(task30_comment1)

    task30_comment2 = Comment(
        user_id=2,
        task_id=30,
        comment='voluptatem consequuntur earum est et qui laboriosam non'
    )

    db.session.add(task30_comment2)

    task31_comment1 = Comment(
        user_id=1,
        task_id=31,
        comment='cum praesentium qui perspiciatis earum et nemo voluptatem'
    )

    db.session.add(task31_comment1)

    task31_comment2 = Comment(
        user_id=2,
        task_id=31,
        comment='sapiente totam possimus qui quisquam dolores est vitae'
    )

    db.session.add(task31_comment2)

    task32_comment1 = Comment(
        user_id=1,
        task_id=32,
        comment='qui qui quia fugit nihil in eos saepe'
    )

    db.session.add(task32_comment1)

    task32_comment2 = Comment(
        user_id=2,
        task_id=32,
        comment='dolores qui laudantium aut in mollitia neque nesciunt'
    )

    db.session.add(task32_comment2)

    task33_comment1 = Comment(
        user_id=1,
        task_id=33,
        comment='aut doloremque dolor eos fugiat aliquid accusamus et'
    )

    db.session.add(task33_comment1)

    task33_comment2 = Comment(
        user_id=2,
        task_id=33,
        comment='totam molestiae iste dolore cupiditate labore quasi provident'
    )

    db.session.add(task33_comment2)

    task34_comment1 = Comment(
        user_id=1,
        task_id=34,
        comment='modi nostrum non in omnis commodi et aliquid'
    )

    db.session.add(task34_comment1)

    task34_comment2 = Comment(
        user_id=2,
        task_id=34,
        comment='quas nisi unde et sed maxime molestiae et'
    )

    db.session.add(task34_comment2)

    task35_comment1 = Comment(
        user_id=1,
        task_id=35,
        comment='aut alias aliquid officia sint enim omnis minus'
    )

    db.session.add(task35_comment1)

    task35_comment2 = Comment(
        user_id=2,
        task_id=35,
        comment='voluptatem aut magnam enim est architecto porro dolorem'
    )

    db.session.add(task35_comment2)

    task36_comment1 = Comment(
        user_id=1,
        task_id=36,
        comment='iure voluptas voluptatem culpa aut facere qui sit'
    )

    db.session.add(task36_comment1)

    task36_comment2 = Comment(
        user_id=2,
        task_id=36,
        comment='a quisquam et cumque similique in dicta aut'
    )

    db.session.add(task36_comment2)

    task37_comment1 = Comment(
        user_id=1,
        task_id=37,
        comment='et possimus et non voluptatem neque laudantium fugiat'
    )

    db.session.add(task37_comment1)

    task37_comment2 = Comment(
        user_id=2,
        task_id=37,
        comment='eos velit sunt occaecati alias molestiae et et'
    )

    db.session.add(task37_comment2)

    task38_comment1 = Comment(
        user_id=1,
        task_id=38,
        comment='necessitatibus aliquam debitis cupiditate sed fugit est illum'
    )

    db.session.add(task38_comment1)

    task38_comment2 = Comment(
        user_id=2,
        task_id=38,
        comment='exercitationem non at dolorum qui quod repellat consequatur'
    )

    db.session.add(task38_comment2)

    task39_comment1 = Comment(
        user_id=1,
        task_id=39,
        comment='voluptatem ut mollitia cupiditate voluptatem beatae optio quisquam'
    )

    db.session.add(task39_comment1)

    task39_comment2 = Comment(
        user_id=2,
        task_id=39,
        comment='ut qui temporibus excepturi itaque vero quis omnis'
    )

    db.session.add(task39_comment2)

    task40_comment1 = Comment(
        user_id=1,
        task_id=40,
        comment='id incidunt at ut qui ut ea ad'
    )

    db.session.add(task40_comment1)

    task40_comment2 = Comment(
        user_id=2,
        task_id=40,
        comment='optio quaerat corporis odit aliquam qui quis non'
    )

    db.session.add(task40_comment2)

    task41_comment1 = Comment(
        user_id=1,
        task_id=41,
        comment='suscipit quaerat culpa assumenda voluptatem quia ipsum exercitationem'
    )

    db.session.add(task41_comment1)

    task41_comment2 = Comment(
        user_id=2,
        task_id=41,
        comment='amet quod doloremque qui ipsam velit qui quibusdam'
    )

    db.session.add(task41_comment2)

    task42_comment1 = Comment(
        user_id=1,
        task_id=42,
        comment='suscipit nesciunt et porro doloremque et illo alias'
    )

    db.session.add(task42_comment1)

    task42_comment2 = Comment(
        user_id=2,
        task_id=42,
        comment='impedit neque tenetur dolores maxime magni autem eum'
    )

    db.session.add(task42_comment2)

    task43_comment1 = Comment(
        user_id=1,
        task_id=43,
        comment='veniam dolores voluptatum et recusandae unde laboriosam explicabo'
    )

    db.session.add(task43_comment1)

    task43_comment2 = Comment(
        user_id=2,
        task_id=43,
        comment='dolor voluptas quae molestiae non et itaque ratione'
    )

    db.session.add(task43_comment2)

    task44_comment1 = Comment(
        user_id=1,
        task_id=44,
        comment='dolorem optio pariatur vel occaecati rerum fugit quidem'
    )

    db.session.add(task44_comment1)

    task44_comment2 = Comment(
        user_id=2,
        task_id=44,
        comment='ab in consequatur quibusdam qui fugit quam necessitatibus'
    )

    db.session.add(task44_comment2)

    task45_comment1 = Comment(
        user_id=1,
        task_id=45,
        comment='autem praesentium dolorum rem consequatur vel porro explicabo'
    )

    db.session.add(task45_comment1)

    task45_comment2 = Comment(
        user_id=2,
        task_id=45,
        comment='tempora molestiae voluptatum ullam consequuntur magni maiores animi'
    )

    db.session.add(task45_comment2)

    task46_comment1 = Comment(
        user_id=1,
        task_id=46,
        comment='delectus voluptas maxime blanditiis qui laborum consequuntur dignissimos'
    )

    db.session.add(task46_comment1)

    task46_comment2 = Comment(
        user_id=2,
        task_id=46,
        comment='fugit labore suscipit quasi ut totam ratione officiis'
    )

    db.session.add(task46_comment2)

    task47_comment1 = Comment(
        user_id=1,
        task_id=47,
        comment='corporis velit voluptas et aperiam eum velit non'
    )

    db.session.add(task47_comment1)

    task47_comment2 = Comment(
        user_id=2,
        task_id=47,
        comment='et quo dolore tenetur ea facere dicta et'
    )

    db.session.add(task47_comment2)

    task48_comment1 = Comment(
        user_id=1,
        task_id=48,
        comment='aspernatur impedit necessitatibus quis quo est voluptates minus'
    )

    db.session.add(task48_comment1)

    task48_comment2 = Comment(
        user_id=2,
        task_id=48,
        comment='vitae asperiores vero quas possimus tempora quia numquam'
    )

    db.session.add(task48_comment2)

    task49_comment1 = Comment(
        user_id=1,
        task_id=49,
        comment='repellendus qui ipsa ut expedita voluptatem consequuntur architecto'
    )

    db.session.add(task49_comment1)

    task49_comment2 = Comment(
        user_id=2,
        task_id=49,
        comment='doloremque fugit et error voluptates accusamus ut omnis'
    )

    db.session.add(task49_comment2)

    task50_comment1 = Comment(
        user_id=1,
        task_id=50,
        comment='consequatur illum quia sed unde omnis cumque eaque'
    )

    db.session.add(task50_comment1)

    task50_comment2 = Comment(
        user_id=2,
        task_id=50,
        comment='natus inventore et sunt officiis sit quo itaque'
    )

    db.session.add(task50_comment2)

    task51_comment1 = Comment(
        user_id=1,
        task_id=51,
        comment='vitae eos numquam illum laudantium id ipsa vero'
    )

    db.session.add(task51_comment1)

    task51_comment2 = Comment(
        user_id=2,
        task_id=51,
        comment='in et saepe necessitatibus necessitatibus voluptas voluptatem modi'
    )

    db.session.add(task51_comment2)

    task52_comment1 = Comment(
        user_id=1,
        task_id=52,
        comment='dolores voluptatem cum pariatur tempore eum blanditiis id'
    )

    db.session.add(task52_comment1)

    task52_comment2 = Comment(
        user_id=2,
        task_id=52,
        comment='at odio et sunt voluptatem aut alias deleniti'
    )

    db.session.add(task52_comment2)

    task53_comment1 = Comment(
        user_id=1,
        task_id=53,
        comment='rerum consequuntur eos similique adipisci facere voluptatem impedit'
    )

    db.session.add(task53_comment1)

    task53_comment2 = Comment(
        user_id=2,
        task_id=53,
        comment='laudantium voluptas vero architecto tempore deserunt aperiam ut'
    )

    db.session.add(task53_comment2)

    task54_comment1 = Comment(
        user_id=1,
        task_id=54,
        comment='harum et et et vero ex inventore dolores'
    )

    db.session.add(task54_comment1)

    task54_comment2 = Comment(
        user_id=2,
        task_id=54,
        comment='rem voluptatum sed excepturi nesciunt voluptates delectus reprehenderit'
    )

    db.session.add(task54_comment2)

    task55_comment1 = Comment(
        user_id=1,
        task_id=55,
        comment='fuga libero occaecati aut est fugiat at perspiciatis'
    )

    db.session.add(task55_comment1)

    task55_comment2 = Comment(
        user_id=2,
        task_id=55,
        comment='nulla rerum aut aut voluptate quidem culpa ducimus'
    )

    db.session.add(task55_comment2)

    task56_comment1 = Comment(
        user_id=1,
        task_id=56,
        comment='voluptas iste eius sunt velit et ipsum aliquid'
    )

    db.session.add(task56_comment1)

    task56_comment2 = Comment(
        user_id=2,
        task_id=56,
        comment='numquam quasi ut vero qui sed voluptas ex'
    )

    db.session.add(task56_comment2)

    task57_comment1 = Comment(
        user_id=1,
        task_id=57,
        comment='dolore numquam recusandae qui eos adipisci non perferendis'
    )

    db.session.add(task57_comment1)

    task57_comment2 = Comment(
        user_id=2,
        task_id=57,
        comment='odio ut soluta nostrum ab dolorem similique numquam'
    )

    db.session.add(task57_comment2)

    task58_comment1 = Comment(
        user_id=1,
        task_id=58,
        comment='omnis modi velit veritatis iusto aut quisquam dolores'
    )

    db.session.add(task58_comment1)

    task58_comment2 = Comment(
        user_id=2,
        task_id=58,
        comment='non id ut commodi esse voluptas saepe eveniet'
    )

    db.session.add(task58_comment2)

    task59_comment1 = Comment(
        user_id=1,
        task_id=59,
        comment='aut maiores dolorem esse deserunt fugit ratione ea'
    )

    db.session.add(task59_comment1)

    task59_comment2 = Comment(
        user_id=2,
        task_id=59,
        comment='eaque fuga a aut nobis fuga et perspiciatis'
    )

    db.session.add(task59_comment2)

    task60_comment1 = Comment(
        user_id=1,
        task_id=60,
        comment='iure neque quaerat quasi et ipsa nihil hic'
    )

    db.session.add(task60_comment1)

    task60_comment2 = Comment(
        user_id=2,
        task_id=60,
        comment='voluptas laboriosam dolorem aliquam explicabo iure minima aut'
    )

    db.session.add(task60_comment2)

    task61_comment1 = Comment(
        user_id=1,
        task_id=61,
        comment='voluptatem ratione culpa iusto blanditiis sit eum repudiandae'
    )

    db.session.add(task61_comment1)

    task61_comment2 = Comment(
        user_id=2,
        task_id=61,
        comment='accusantium optio non nam non aliquid voluptas doloribus'
    )

    db.session.add(task61_comment2)

    task62_comment1 = Comment(
        user_id=1,
        task_id=62,
        comment='quis quas beatae mollitia quia sit magni reiciendis'
    )

    db.session.add(task62_comment1)

    task62_comment2 = Comment(
        user_id=2,
        task_id=62,
        comment='aut ipsa aspernatur accusamus est totam rerum aut'
    )

    db.session.add(task62_comment2)

    task63_comment1 = Comment(
        user_id=1,
        task_id=63,
        comment='aut minima esse rerum sint voluptatibus consectetur deleniti'
    )

    db.session.add(task63_comment1)

    task63_comment2 = Comment(
        user_id=2,
        task_id=63,
        comment='accusantium sapiente impedit ut qui est quidem accusamus'
    )

    db.session.add(task63_comment2)

    task64_comment1 = Comment(
        user_id=1,
        task_id=64,
        comment='iste est dolores ea consequatur libero sint et'
    )

    db.session.add(task64_comment1)

    task64_comment2 = Comment(
        user_id=2,
        task_id=64,
        comment='sit ipsum est velit eaque sed in autem'
    )

    db.session.add(task64_comment2)

    task65_comment1 = Comment(
        user_id=1,
        task_id=65,
        comment='magni perferendis sit ut ea ducimus deserunt est'
    )

    db.session.add(task65_comment1)

    task65_comment2 = Comment(
        user_id=2,
        task_id=65,
        comment='aut sit aut molestiae quis cum est minima'
    )

    db.session.add(task65_comment2)

    task66_comment1 = Comment(
        user_id=1,
        task_id=66,
        comment='possimus sed nostrum voluptate reprehenderit doloribus aut fuga'
    )

    db.session.add(task66_comment1)

    task66_comment2 = Comment(
        user_id=2,
        task_id=66,
        comment='a sit id et natus incidunt nisi ex'
    )

    db.session.add(task66_comment2)

    task67_comment1 = Comment(
        user_id=1,
        task_id=67,
        comment='quasi quos et porro rem perferendis qui voluptates'
    )

    db.session.add(task67_comment1)

    task67_comment2 = Comment(
        user_id=2,
        task_id=67,
        comment='sunt in eaque sint voluptas aut eos tempora'
    )

    db.session.add(task67_comment2)

    task68_comment1 = Comment(
        user_id=1,
        task_id=68,
        comment='facere tempora quaerat recusandae ut aliquid perferendis doloribus'
    )

    db.session.add(task68_comment1)

    task68_comment2 = Comment(
        user_id=2,
        task_id=68,
        comment='architecto dolorum occaecati ut rerum enim dolor nobis'
    )

    db.session.add(task68_comment2)

    task69_comment1 = Comment(
        user_id=1,
        task_id=69,
        comment='rerum minus in praesentium itaque quam quasi voluptatem'
    )

    db.session.add(task69_comment1)

    task69_comment2 = Comment(
        user_id=2,
        task_id=69,
        comment='quaerat natus accusamus dolores velit soluta ut vitae'
    )

    db.session.add(task69_comment2)

    task70_comment1 = Comment(
        user_id=1,
        task_id=70,
        comment='quaerat molestias id commodi dolor aut et rerum'
    )

    db.session.add(task70_comment1)

    task70_comment2 = Comment(
        user_id=2,
        task_id=70,
        comment='quis reprehenderit aliquam omnis unde quia omnis et'
    )

    db.session.add(task70_comment2)

    task71_comment1 = Comment(
        user_id=1,
        task_id=71,
        comment='consequatur vero sunt est hic esse facilis ut'
    )

    db.session.add(task71_comment1)

    task71_comment2 = Comment(
        user_id=2,
        task_id=71,
        comment='neque a ut quasi qui facere dolorem qui'
    )

    db.session.add(task71_comment2)

    task72_comment1 = Comment(
        user_id=1,
        task_id=72,
        comment='qui soluta vitae officia et aliquam a in'
    )

    db.session.add(task72_comment1)

    task72_comment2 = Comment(
        user_id=2,
        task_id=72,
        comment='dolor et ut qui quod eum ullam nesciunt'
    )

    db.session.add(task72_comment2)

    task73_comment1 = Comment(
        user_id=1,
        task_id=73,
        comment='sit exercitationem beatae provident est dolores et vel'
    )

    db.session.add(task73_comment1)

    task73_comment2 = Comment(
        user_id=2,
        task_id=73,
        comment='libero neque qui nam aut consequatur est libero'
    )

    db.session.add(task73_comment2)

    task74_comment1 = Comment(
        user_id=1,
        task_id=74,
        comment='ut quia voluptatem eum suscipit suscipit accusantium et'
    )

    db.session.add(task74_comment1)

    task74_comment2 = Comment(
        user_id=2,
        task_id=74,
        comment='corrupti odit sit quidem culpa saepe odio quidem'
    )

    db.session.add(task74_comment2)

    task75_comment1 = Comment(
        user_id=1,
        task_id=75,
        comment='incidunt ad ut tenetur magnam magnam voluptatem voluptas'
    )

    db.session.add(task75_comment1)

    task75_comment2 = Comment(
        user_id=2,
        task_id=75,
        comment='totam dignissimos aut reprehenderit explicabo nesciunt ducimus earum'
    )

    db.session.add(task75_comment2)

    task76_comment1 = Comment(
        user_id=1,
        task_id=76,
        comment='exercitationem quasi rem culpa accusamus ut veritatis voluptatem'
    )

    db.session.add(task76_comment1)

    task76_comment2 = Comment(
        user_id=2,
        task_id=76,
        comment='sint ut excepturi non inventore atque delectus aliquam'
    )

    db.session.add(task76_comment2)

    task77_comment1 = Comment(
        user_id=1,
        task_id=77,
        comment='qui quia dolor quam ut ex omnis odio'
    )

    db.session.add(task77_comment1)

    task77_comment2 = Comment(
        user_id=2,
        task_id=77,
        comment='numquam alias eaque ullam qui et molestiae dolorem'
    )

    db.session.add(task77_comment2)

    task78_comment1 = Comment(
        user_id=1,
        task_id=78,
        comment='ducimus autem aliquam quia ut illum sunt voluptatibus'
    )

    db.session.add(task78_comment1)

    task78_comment2 = Comment(
        user_id=2,
        task_id=78,
        comment='ullam ab ut eveniet sed voluptatem eius illum'
    )

    db.session.add(task78_comment2)

    task79_comment1 = Comment(
        user_id=1,
        task_id=79,
        comment='quae eum dolor tempore et quam dolor non'
    )

    db.session.add(task79_comment1)

    task79_comment2 = Comment(
        user_id=2,
        task_id=79,
        comment='tempore et dolorum harum error consequatur assumenda quaerat'
    )

    db.session.add(task79_comment2)

    task80_comment1 = Comment(
        user_id=1,
        task_id=80,
        comment='eveniet dicta sunt fugiat est exercitationem rerum nulla'
    )

    db.session.add(task80_comment1)

    task80_comment2 = Comment(
        user_id=2,
        task_id=80,
        comment='est vero minima dolorem veniam laudantium et tempore'
    )

    db.session.add(task80_comment2)

    task81_comment1 = Comment(
        user_id=1,
        task_id=81,
        comment='dolor mollitia voluptate rem accusamus omnis omnis voluptatem'
    )

    db.session.add(task81_comment1)

    task81_comment2 = Comment(
        user_id=2,
        task_id=81,
        comment='voluptas et molestias dicta qui soluta voluptatem cum'
    )

    db.session.add(task81_comment2)

    task82_comment1 = Comment(
        user_id=1,
        task_id=82,
        comment='velit repudiandae maiores beatae nihil voluptatem fuga iure'
    )

    db.session.add(task82_comment1)

    task82_comment2 = Comment(
        user_id=2,
        task_id=82,
        comment='deleniti expedita nemo ea qui praesentium ratione quibusdam'
    )

    db.session.add(task82_comment2)

    task83_comment1 = Comment(
        user_id=1,
        task_id=83,
        comment='sunt voluptates sed porro quos ab provident culpa'
    )

    db.session.add(task83_comment1)

    task83_comment2 = Comment(
        user_id=2,
        task_id=83,
        comment='est et eum error in sit animi corrupti'
    )

    db.session.add(task83_comment2)

    task84_comment1 = Comment(
        user_id=1,
        task_id=84,
        comment='aliquam voluptate doloremque temporibus excepturi illum omnis et'
    )

    db.session.add(task84_comment1)

    task84_comment2 = Comment(
        user_id=2,
        task_id=84,
        comment='qui et consectetur quasi voluptatum impedit id libero'
    )

    db.session.add(task84_comment2)

    task85_comment1 = Comment(
        user_id=1,
        task_id=85,
        comment='aut perspiciatis et corporis amet a tempore quod'
    )

    db.session.add(task85_comment1)

    task85_comment2 = Comment(
        user_id=2,
        task_id=85,
        comment='debitis hic rerum quis suscipit sit et aut'
    )

    db.session.add(task85_comment2)

    task86_comment1 = Comment(
        user_id=1,
        task_id=86,
        comment='asperiores optio aliquam beatae id animi laboriosam ratione'
    )

    db.session.add(task86_comment1)

    task86_comment2 = Comment(
        user_id=2,
        task_id=86,
        comment='ut earum molestiae necessitatibus qui officiis qui adipisci'
    )

    db.session.add(task86_comment2)

    task87_comment1 = Comment(
        user_id=1,
        task_id=87,
        comment='ullam at corrupti aut tenetur consequatur commodi totam'
    )

    db.session.add(task87_comment1)

    task87_comment2 = Comment(
        user_id=2,
        task_id=87,
        comment='dolore sint et ullam non suscipit minus enim'
    )

    db.session.add(task87_comment2)

    task88_comment1 = Comment(
        user_id=1,
        task_id=88,
        comment='et minima fuga dignissimos et illum libero delectus'
    )

    db.session.add(task88_comment1)

    task88_comment2 = Comment(
        user_id=2,
        task_id=88,
        comment='et quis sapiente autem omnis assumenda laudantium sit'
    )

    db.session.add(task88_comment2)

    task89_comment1 = Comment(
        user_id=1,
        task_id=89,
        comment='qui ut amet facilis doloremque est veritatis sunt'
    )

    db.session.add(task89_comment1)

    task89_comment2 = Comment(
        user_id=2,
        task_id=89,
        comment='aspernatur ipsum error repellat ut quos quod officiis'
    )

    db.session.add(task89_comment2)

    task90_comment1 = Comment(
        user_id=1,
        task_id=90,
        comment='magni unde ea qui est quisquam velit rerum'
    )

    db.session.add(task90_comment1)

    task90_comment2 = Comment(
        user_id=2,
        task_id=90,
        comment='sit sequi id saepe dolor blanditiis aut iusto'
    )

    db.session.add(task90_comment2)

    task91_comment1 = Comment(
        user_id=1,
        task_id=91,
        comment='ut repellendus excepturi est consequatur odio ullam dolor'
    )

    db.session.add(task91_comment1)

    task91_comment2 = Comment(
        user_id=2,
        task_id=91,
        comment='est aut aut placeat atque sit autem ut'
    )

    db.session.add(task91_comment2)

    task92_comment1 = Comment(
        user_id=1,
        task_id=92,
        comment='natus tempore repellendus sunt natus qui et ea'
    )

    db.session.add(task92_comment1)

    task92_comment2 = Comment(
        user_id=2,
        task_id=92,
        comment='tenetur ut est aperiam et rem asperiores quia'
    )

    db.session.add(task92_comment2)

    task93_comment1 = Comment(
        user_id=1,
        task_id=93,
        comment='assumenda natus molestiae sunt officia quidem ex dolores'
    )

    db.session.add(task93_comment1)

    task93_comment2 = Comment(
        user_id=2,
        task_id=93,
        comment='ea ullam enim natus voluptate eius corrupti adipisci'
    )

    db.session.add(task93_comment2)

    task94_comment1 = Comment(
        user_id=1,
        task_id=94,
        comment='consequatur cupiditate ut libero enim pariatur corrupti iusto'
    )

    db.session.add(task94_comment1)

    task94_comment2 = Comment(
        user_id=2,
        task_id=94,
        comment='consequuntur voluptatem nam minus nesciunt molestias sit ea'
    )

    db.session.add(task94_comment2)

    task95_comment1 = Comment(
        user_id=1,
        task_id=95,
        comment='sit at quos quod et voluptatem sit autem'
    )

    db.session.add(task95_comment1)

    task95_comment2 = Comment(
        user_id=2,
        task_id=95,
        comment='error nemo dignissimos quod sit fuga enim est'
    )

    db.session.add(task95_comment2)

    task96_comment1 = Comment(
        user_id=1,
        task_id=96,
        comment='ex natus quas cupiditate laboriosam neque totam quas'
    )

    db.session.add(task96_comment1)

    task96_comment2 = Comment(
        user_id=2,
        task_id=96,
        comment='deleniti exercitationem porro quae rerum quia repudiandae quia'
    )

    db.session.add(task96_comment2)

    task97_comment1 = Comment(
        user_id=1,
        task_id=97,
        comment='rerum animi voluptas nobis voluptatem earum aspernatur laudantium'
    )

    db.session.add(task97_comment1)

    task97_comment2 = Comment(
        user_id=2,
        task_id=97,
        comment='incidunt ipsum voluptas facere doloribus ullam ad eligendi'
    )

    db.session.add(task97_comment2)

    task98_comment1 = Comment(
        user_id=1,
        task_id=98,
        comment='qui quia totam assumenda odit non vel dolor'
    )

    db.session.add(task98_comment1)

    task98_comment2 = Comment(
        user_id=2,
        task_id=98,
        comment='alias et est recusandae suscipit quo et aut'
    )

    db.session.add(task98_comment2)

    task99_comment1 = Comment(
        user_id=1,
        task_id=99,
        comment='id eum eos eos voluptas magni consequatur dolores'
    )

    db.session.add(task99_comment1)

    task99_comment2 = Comment(
        user_id=2,
        task_id=99,
        comment='sit eos repellendus explicabo sunt nulla reiciendis necessitatibus'
    )

    db.session.add(task99_comment2)

    task100_comment1 = Comment(
        user_id=1,
        task_id=100,
        comment='at quo quia repellendus cumque modi minima ea'
    )

    db.session.add(task100_comment1)

    task100_comment2 = Comment(
        user_id=2,
        task_id=100,
        comment='illo dolore reiciendis suscipit quis mollitia cupiditate qui'
    )

    db.session.add(task100_comment2)

    task101_comment1 = Comment(
        user_id=1,
        task_id=101,
        comment='impedit esse ut laboriosam quam consequuntur repudiandae iure'
    )

    db.session.add(task101_comment1)

    task101_comment2 = Comment(
        user_id=2,
        task_id=101,
        comment='rem quam quia dolores adipisci tempora a sequi'
    )

    db.session.add(task101_comment2)

    task102_comment1 = Comment(
        user_id=1,
        task_id=102,
        comment='qui non asperiores voluptas dignissimos dicta omnis ab'
    )

    db.session.add(task102_comment1)

    task102_comment2 = Comment(
        user_id=2,
        task_id=102,
        comment='error iusto eius et veniam reprehenderit pariatur dolor'
    )

    db.session.add(task102_comment2)

    task103_comment1 = Comment(
        user_id=1,
        task_id=103,
        comment='magnam delectus vitae laboriosam et atque aperiam et'
    )

    db.session.add(task103_comment1)

    task103_comment2 = Comment(
        user_id=2,
        task_id=103,
        comment='neque et maiores eligendi necessitatibus saepe et quam'
    )

    db.session.add(task103_comment2)

    task104_comment1 = Comment(
        user_id=1,
        task_id=104,
        comment='voluptatem omnis rem at possimus quasi magnam sed'
    )

    db.session.add(task104_comment1)

    task104_comment2 = Comment(
        user_id=2,
        task_id=104,
        comment='velit et magni culpa numquam qui aliquam aspernatur'
    )

    db.session.add(task104_comment2)

    task105_comment1 = Comment(
        user_id=1,
        task_id=105,
        comment='aspernatur aut et qui ut reprehenderit fuga blanditiis'
    )

    db.session.add(task105_comment1)

    task105_comment2 = Comment(
        user_id=2,
        task_id=105,
        comment='voluptatibus sed voluptatem tempora totam beatae at mollitia'
    )

    db.session.add(task105_comment2)

    task106_comment1 = Comment(
        user_id=1,
        task_id=106,
        comment='ad qui molestias est autem ut molestiae eum'
    )

    db.session.add(task106_comment1)

    task106_comment2 = Comment(
        user_id=2,
        task_id=106,
        comment='voluptatem minima quo rerum vitae maiores et est'
    )

    db.session.add(task106_comment2)

    task107_comment1 = Comment(
        user_id=1,
        task_id=107,
        comment='quaerat iure a voluptatem repudiandae sit soluta aut'
    )

    db.session.add(task107_comment1)

    task107_comment2 = Comment(
        user_id=2,
        task_id=107,
        comment='veniam exercitationem est ipsum eius corrupti aut sequi'
    )

    db.session.add(task107_comment2)

    task108_comment1 = Comment(
        user_id=1,
        task_id=108,
        comment='cumque corrupti beatae non architecto omnis consequatur odio'
    )

    db.session.add(task108_comment1)

    task108_comment2 = Comment(
        user_id=2,
        task_id=108,
        comment='consequatur recusandae maxime quis voluptatem laboriosam sit beatae'
    )

    db.session.add(task108_comment2)

    task109_comment1 = Comment(
        user_id=1,
        task_id=109,
        comment='nemo nulla odio deserunt dolor qui excepturi officiis'
    )

    db.session.add(task109_comment1)

    task109_comment2 = Comment(
        user_id=2,
        task_id=109,
        comment='quam dolorum consequatur cum est qui nam vitae'
    )

    db.session.add(task109_comment2)

    task110_comment1 = Comment(
        user_id=1,
        task_id=110,
        comment='omnis distinctio mollitia in earum esse velit eius'
    )

    db.session.add(task110_comment1)

    task110_comment2 = Comment(
        user_id=2,
        task_id=110,
        comment='voluptatum quisquam tempore voluptas minus necessitatibus tempore quo'
    )

    db.session.add(task110_comment2)

    task111_comment1 = Comment(
        user_id=1,
        task_id=111,
        comment='ullam labore illum ut est maiores assumenda odit'
    )

    db.session.add(task111_comment1)

    task111_comment2 = Comment(
        user_id=2,
        task_id=111,
        comment='consequatur omnis veniam fugit ut cum et enim'
    )

    db.session.add(task111_comment2)

    task112_comment1 = Comment(
        user_id=1,
        task_id=112,
        comment='sequi error dolorum repellat suscipit minus voluptatem sit'
    )

    db.session.add(task112_comment1)

    task112_comment2 = Comment(
        user_id=2,
        task_id=112,
        comment='tenetur explicabo quis sit earum debitis est sit'
    )

    db.session.add(task112_comment2)

    task113_comment1 = Comment(
        user_id=1,
        task_id=113,
        comment='similique consequuntur amet et dicta rerum tempore eos'
    )

    db.session.add(task113_comment1)

    task113_comment2 = Comment(
        user_id=2,
        task_id=113,
        comment='officia tenetur est est velit error iste sunt'
    )

    db.session.add(task113_comment2)

    task114_comment1 = Comment(
        user_id=1,
        task_id=114,
        comment='esse qui ut explicabo debitis quia eaque minus'
    )

    db.session.add(task114_comment1)

    task114_comment2 = Comment(
        user_id=2,
        task_id=114,
        comment='ab minima similique eius alias doloribus et quia'
    )

    db.session.add(task114_comment2)

    task115_comment1 = Comment(
        user_id=1,
        task_id=115,
        comment='et a qui dolor culpa sequi incidunt quae'
    )

    db.session.add(task115_comment1)

    task115_comment2 = Comment(
        user_id=2,
        task_id=115,
        comment='quisquam dolor laborum aut reprehenderit consequuntur illum aspernatur'
    )

    db.session.add(task115_comment2)

    task116_comment1 = Comment(
        user_id=1,
        task_id=116,
        comment='voluptatem ad laboriosam molestias dolorem vel in blanditiis'
    )

    db.session.add(task116_comment1)

    task116_comment2 = Comment(
        user_id=2,
        task_id=116,
        comment='facilis voluptatem quam officiis eaque nulla quam omnis'
    )

    db.session.add(task116_comment2)

    task117_comment1 = Comment(
        user_id=1,
        task_id=117,
        comment='veniam laudantium qui iste esse et non quaerat'
    )

    db.session.add(task117_comment1)

    task117_comment2 = Comment(
        user_id=2,
        task_id=117,
        comment='veniam tenetur dignissimos fuga saepe corrupti quo est'
    )

    db.session.add(task117_comment2)

    task118_comment1 = Comment(
        user_id=1,
        task_id=118,
        comment='a harum porro minima molestias quidem asperiores velit'
    )

    db.session.add(task118_comment1)

    task118_comment2 = Comment(
        user_id=2,
        task_id=118,
        comment='sint incidunt quibusdam odio totam et aut dolorem'
    )

    db.session.add(task118_comment2)

    task119_comment1 = Comment(
        user_id=1,
        task_id=119,
        comment='atque repudiandae amet et illum placeat velit a'
    )

    db.session.add(task119_comment1)

    task119_comment2 = Comment(
        user_id=2,
        task_id=119,
        comment='eaque tempora ut porro delectus qui numquam saepe'
    )

    db.session.add(task119_comment2)

    task120_comment1 = Comment(
        user_id=1,
        task_id=120,
        comment='aut omnis nisi aut est repellat voluptatem quos'
    )

    db.session.add(task120_comment1)

    task120_comment2 = Comment(
        user_id=2,
        task_id=120,
        comment='voluptatem dolorum natus veniam recusandae libero sint tenetur'
    )

    db.session.add(task120_comment2)

    task121_comment1 = Comment(
        user_id=1,
        task_id=121,
        comment='nostrum maiores facere consequatur sapiente quo aut eum'
    )

    db.session.add(task121_comment1)

    task121_comment2 = Comment(
        user_id=2,
        task_id=121,
        comment='facere sunt nihil exercitationem sed sapiente optio libero'
    )

    db.session.add(task121_comment2)

    task122_comment1 = Comment(
        user_id=1,
        task_id=122,
        comment='ducimus impedit est laudantium qui doloremque vel et'
    )

    db.session.add(task122_comment1)

    task122_comment2 = Comment(
        user_id=2,
        task_id=122,
        comment='similique enim ea illo enim aliquid consequatur maxime'
    )

    db.session.add(task122_comment2)

    task123_comment1 = Comment(
        user_id=1,
        task_id=123,
        comment='odio laboriosam dolorem neque voluptates labore natus ipsa'
    )

    db.session.add(task123_comment1)

    task123_comment2 = Comment(
        user_id=2,
        task_id=123,
        comment='sit quis id asperiores molestias expedita maiores omnis'
    )

    db.session.add(task123_comment2)

    task124_comment1 = Comment(
        user_id=1,
        task_id=124,
        comment='consequuntur corrupti ea ex perspiciatis in ipsa dolorem'
    )

    db.session.add(task124_comment1)

    task124_comment2 = Comment(
        user_id=2,
        task_id=124,
        comment='deleniti id consequatur aliquid eius a occaecati et'
    )

    db.session.add(task124_comment2)

    task125_comment1 = Comment(
        user_id=1,
        task_id=125,
        comment='officia velit quisquam fuga et qui mollitia cumque'
    )

    db.session.add(task125_comment1)

    task125_comment2 = Comment(
        user_id=2,
        task_id=125,
        comment='vel nam nostrum non aliquam sed harum est'
    )

    db.session.add(task125_comment2)

    task126_comment1 = Comment(
        user_id=1,
        task_id=126,
        comment='est in dolorum doloribus numquam cupiditate eum quia'
    )

    db.session.add(task126_comment1)

    task126_comment2 = Comment(
        user_id=2,
        task_id=126,
        comment='iure impedit ad praesentium autem similique officiis eius'
    )

    db.session.add(task126_comment2)

    task127_comment1 = Comment(
        user_id=1,
        task_id=127,
        comment='ut aut dolorem nulla modi et mollitia qui'
    )

    db.session.add(task127_comment1)

    task127_comment2 = Comment(
        user_id=2,
        task_id=127,
        comment='dolores repellendus enim nulla veritatis qui et provident'
    )

    db.session.add(task127_comment2)

    task128_comment1 = Comment(
        user_id=1,
        task_id=128,
        comment='at suscipit dolore architecto dolore est assumenda omnis'
    )

    db.session.add(task128_comment1)

    task128_comment2 = Comment(
        user_id=2,
        task_id=128,
        comment='sequi placeat tempore quaerat repudiandae et aliquid ut'
    )

    db.session.add(task128_comment2)

    task129_comment1 = Comment(
        user_id=1,
        task_id=129,
        comment='tempore quas incidunt nam suscipit praesentium enim et'
    )

    db.session.add(task129_comment1)

    task129_comment2 = Comment(
        user_id=2,
        task_id=129,
        comment='minus voluptatem incidunt et non eaque esse non'
    )

    db.session.add(task129_comment2)

    task130_comment1 = Comment(
        user_id=1,
        task_id=130,
        comment='atque sed nobis a quaerat magnam ea ea'
    )

    db.session.add(task130_comment1)

    task130_comment2 = Comment(
        user_id=2,
        task_id=130,
        comment='iste perferendis autem dolorem doloribus tempore consequatur omnis'
    )

    db.session.add(task130_comment2)

    task131_comment1 = Comment(
        user_id=1,
        task_id=131,
        comment='unde laudantium dicta ducimus sunt ad aliquam vero'
    )

    db.session.add(task131_comment1)

    task131_comment2 = Comment(
        user_id=2,
        task_id=131,
        comment='dolores accusantium nulla iste illum quasi blanditiis nihil'
    )

    db.session.add(task131_comment2)

    task132_comment1 = Comment(
        user_id=1,
        task_id=132,
        comment='vitae autem perspiciatis doloribus nisi dolores debitis minus'
    )

    db.session.add(task132_comment1)

    task132_comment2 = Comment(
        user_id=2,
        task_id=132,
        comment='perspiciatis adipisci autem neque nam soluta aut consequatur'
    )

    db.session.add(task132_comment2)

    task133_comment1 = Comment(
        user_id=1,
        task_id=133,
        comment='quisquam ea et occaecati voluptatem iste soluta ut'
    )

    db.session.add(task133_comment1)

    task133_comment2 = Comment(
        user_id=2,
        task_id=133,
        comment='aut accusamus perferendis ab at ipsa fugit ea'
    )

    db.session.add(task133_comment2)

    task134_comment1 = Comment(
        user_id=1,
        task_id=134,
        comment='non labore rerum veniam non quo voluptatem modi'
    )

    db.session.add(task134_comment1)

    task134_comment2 = Comment(
        user_id=2,
        task_id=134,
        comment='facilis ratione vel et odio et saepe eius'
    )

    db.session.add(task134_comment2)

    task135_comment1 = Comment(
        user_id=1,
        task_id=135,
        comment='id saepe et necessitatibus harum qui voluptatem molestias'
    )

    db.session.add(task135_comment1)

    task135_comment2 = Comment(
        user_id=2,
        task_id=135,
        comment='sed iure sed dolores harum cupiditate quo nisi'
    )

    db.session.add(task135_comment2)

    task136_comment1 = Comment(
        user_id=1,
        task_id=136,
        comment='inventore enim et ad enim sed soluta quo'
    )

    db.session.add(task136_comment1)

    task136_comment2 = Comment(
        user_id=2,
        task_id=136,
        comment='facere numquam reprehenderit optio odio sed est voluptate'
    )

    db.session.add(task136_comment2)

    task137_comment1 = Comment(
        user_id=1,
        task_id=137,
        comment='sit architecto facilis deserunt impedit veniam cum ut'
    )

    db.session.add(task137_comment1)

    task137_comment2 = Comment(
        user_id=2,
        task_id=137,
        comment='dolorem rerum quia consectetur consequatur ea voluptatem consequatur'
    )

    db.session.add(task137_comment2)

    task138_comment1 = Comment(
        user_id=1,
        task_id=138,
        comment='dolores consequatur molestiae qui repellat in quia sunt'
    )

    db.session.add(task138_comment1)

    task138_comment2 = Comment(
        user_id=2,
        task_id=138,
        comment='enim perferendis hic quasi ex numquam ut soluta'
    )

    db.session.add(task138_comment2)

    task139_comment1 = Comment(
        user_id=1,
        task_id=139,
        comment='qui explicabo ut assumenda voluptatum aut rerum labore'
    )

    db.session.add(task139_comment1)

    task139_comment2 = Comment(
        user_id=2,
        task_id=139,
        comment='ut molestiae incidunt et dolorum tempore commodi non'
    )

    db.session.add(task139_comment2)

    task140_comment1 = Comment(
        user_id=1,
        task_id=140,
        comment='a eum quia itaque consequatur fugiat hic esse'
    )

    db.session.add(task140_comment1)

    task140_comment2 = Comment(
        user_id=2,
        task_id=140,
        comment='in quasi recusandae iure et ut in molestias'
    )

    db.session.add(task140_comment2)

    task141_comment1 = Comment(
        user_id=1,
        task_id=141,
        comment='illum illum quisquam consequatur sit laboriosam natus id'
    )

    db.session.add(task141_comment1)

    task141_comment2 = Comment(
        user_id=2,
        task_id=141,
        comment='accusamus libero quis non placeat est aliquam qui'
    )

    db.session.add(task141_comment2)

    task142_comment1 = Comment(
        user_id=1,
        task_id=142,
        comment='nisi maiores ipsa est in quia minus ex'
    )

    db.session.add(task142_comment1)

    task142_comment2 = Comment(
        user_id=2,
        task_id=142,
        comment='dolor et aut odio ea quidem laborum unde'
    )

    db.session.add(task142_comment2)

    task143_comment1 = Comment(
        user_id=1,
        task_id=143,
        comment='sint illo occaecati sit ut voluptatibus rem in'
    )

    db.session.add(task143_comment1)

    task143_comment2 = Comment(
        user_id=2,
        task_id=143,
        comment='et asperiores aspernatur molestias ut dignissimos et consequatur'
    )

    db.session.add(task143_comment2)

    task144_comment1 = Comment(
        user_id=1,
        task_id=144,
        comment='libero accusantium quia eum voluptas deleniti asperiores fuga'
    )

    db.session.add(task144_comment1)

    task144_comment2 = Comment(
        user_id=2,
        task_id=144,
        comment='et ut ut voluptates reiciendis harum odio nihil'
    )

    db.session.add(task144_comment2)

    task145_comment1 = Comment(
        user_id=1,
        task_id=145,
        comment='ea praesentium sed animi molestias et tempore temporibus'
    )

    db.session.add(task145_comment1)

    task145_comment2 = Comment(
        user_id=2,
        task_id=145,
        comment='voluptas autem veritatis ut officiis quia iure quis'
    )

    db.session.add(task145_comment2)

    task146_comment1 = Comment(
        user_id=1,
        task_id=146,
        comment='porro optio minus blanditiis eligendi excepturi molestiae aliquam'
    )

    db.session.add(task146_comment1)

    task146_comment2 = Comment(
        user_id=2,
        task_id=146,
        comment='odio ipsam ut ea fugiat nesciunt ab vel'
    )

    db.session.add(task146_comment2)

    task147_comment1 = Comment(
        user_id=1,
        task_id=147,
        comment='molestiae velit fugit dolor deleniti a et repellat'
    )

    db.session.add(task147_comment1)

    task147_comment2 = Comment(
        user_id=2,
        task_id=147,
        comment='at sit quis qui vel excepturi quas id'
    )

    db.session.add(task147_comment2)

    task148_comment1 = Comment(
        user_id=1,
        task_id=148,
        comment='sit eaque omnis voluptas laboriosam neque expedita voluptate'
    )

    db.session.add(task148_comment1)

    task148_comment2 = Comment(
        user_id=2,
        task_id=148,
        comment='tempora ut ut vel deleniti nesciunt error molestias'
    )

    db.session.add(task148_comment2)

    task149_comment1 = Comment(
        user_id=1,
        task_id=149,
        comment='rerum excepturi minima voluptatem beatae commodi sed nostrum'
    )

    db.session.add(task149_comment1)

    task149_comment2 = Comment(
        user_id=2,
        task_id=149,
        comment='corrupti laboriosam ex magnam dolor ut quis aspernatur'
    )

    db.session.add(task149_comment2)

    task150_comment1 = Comment(
        user_id=1,
        task_id=150,
        comment='illum aliquid voluptatum molestias quisquam ullam numquam voluptas'
    )

    db.session.add(task150_comment1)

    task150_comment2 = Comment(
        user_id=2,
        task_id=150,
        comment='non voluptatem est aliquid ducimus delectus et harum'
    )

    db.session.add(task150_comment2)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
