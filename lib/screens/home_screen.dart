import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutterchatuimessenger/widgets/category_selector.dart';
import 'package:flutterchatuimessenger/widgets/favourite_contacts.dart';
import 'package:flutterchatuimessenger/widgets/recent_chats.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).primaryColor,
      appBar: AppBar(
        //Icon for Menu
        leading: IconButton(
          icon: Icon(Icons.menu),
          iconSize: 30.0,
          color: Colors.white,
          onPressed: () {},
        ),
        title: Text(
          'Chats',
          style: TextStyle(
              fontSize: 28.0,
              fontWeight: FontWeight.bold
          ),
        ),
        elevation: 0.0,
        actions: <Widget>[
          // Icon for Search
          IconButton(
            icon: Icon(Icons.search),
            iconSize: 30.0,
            color: Colors.white,
            onPressed: () {},
          )
        ],
      ),
      body: Column(
        children: <Widget>[
          CategorySelector(),
          Expanded(
            child: Container(
              height: 500.0,
              decoration: BoxDecoration(
                  color: Theme.of(context).accentColor,
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(30.0),
                    topRight: Radius.circular(30.0)
                  )
              ),
              child: Column(
                children: <Widget>[
                  FavouriteContacts(),
                  RecentChats()
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
  }