# Git Advice, Tips and Tricks

## The .gitignore file
Each line in a `.gitignore` file specifies a pattern.

You can place a `.gitignore` file in the parent directory or the same directory as the path.

Here are some common patterns:

* `*.DS_Store` - Ignore all files with `.DS_Store` file extension
* `composer.lock` - Ignore all `composer.lock` files in all directories
* `/vendor/` - Ignore the vendor directory and all directories and files inside it
* `/app/cache/*` - Ignore all directories and files inside `/app/cache/` but not `/app/cache/`
* `/app/config/parameters.yml` - Ignore only parameters.yml inside of the directory `/app/config/`


## Conflict tips
Conflicts can't always be avoided especially in a large active team with several pull request being merged in daily.

Here are some tips to help you reduce conflicts:

* Pull from the origin (github.com in our case) as often as possible. Ideally as soon as you know a pull request has been merged in.
* Merge or rebase from your development branch into your current working branch as often as possible.
* Check out your team member's pull request. If you spot that your team member has edited the same bit of code as yourself then raise it as a potential conflict with them.
* Ensure your team are all using the same auto formatting settings (e.g. remove trailing white spaces, indentation with tabs or spaces, indent by 2 or 4 spaces etc)
* Split your code into smaller files
* Smaller pull request
* Communication is key

## Code review
Code reviews helps the team understand the code base, reduce errors and bugs, learn from other members of the team and improve code quality.

Things to look for:

* Code style
* Commented code
* Obvious errors
* Typos and spelling
* Logical error
* Documentation
* Commit message
* Code improvement
* Labels

Note: make sure you comment on the pull request

How to properly test a pull request:

* Pull a copy of it onto your local machine and test the application
* Don't merge unless you're confident that you fully understand the code you're about to merge in
* Don't be afraid to suggest improvement
* Ask questions on code that you don't understand. Code review isn't just about pointing out mistakes, it's about learning from your team members
* Test new and old features
* Encouraging and positive comments
