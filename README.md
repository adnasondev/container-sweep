# container-sweep

## Examples

js

```
// uses default values for name and age.
container-sweep kill "* * * * *"

// kills all currently running containers every minute.
container-sweep kill --name "*" --age 0 "* * * * *"

// kills all containers named "alpine" that have been running for 3 hours every minute.
container-sweep kill --name "alpine" --age 180 "* * * * *"
```
