#!/bin/sh


# 1. Press Enter to run the script.
# 2. Review the new Git history for errors.
# 3. Push the corrected history to GitHub:
# git push --force --tags origin 'refs/heads/*'
# 4. Clean up the temporary clone:
# cd ..
# rm -rf repo.git


git filter-branch --env-filter '
OLD_EMAIL="sylwester.gebczyk@contractors.roche.com"
CORRECT_NAME="sylwester-gk"
CORRECT_EMAIL="sylwusgk@gmail.com"


if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags