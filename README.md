# Hot R.O.D. - Rides on Demand

## Running

First, [install Signadot Operator](https://www.signadot.com/docs/installation/signadot-operator)
if you haven't already.

### Run everything in Kubernetes

Decide on a namespace in which to install HotROD and then run:

```sh
kubectl create ns "${NAMESPACE}"
kubectl -n "${NAMESPACE}" apply -k k8s/overlays/prod/<devmesh | istio>
```

To uninstall:

```bash
kubectl delete ns "${NAMESPACE}"
```
