---
layout: paper
title: "On the Asymptotics of the Volume of Hitchin Moduli Spaces"
title_ja: "Hitchinモジュライ空間の体積漸近"
authors: "Shiyu Cao"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math-ph
arxiv_abstract: >-
  Let $X$ be a compact Riemann surface of genus $g\geq2$, and let $\M$ be the moduli space of rank-two trace-free Higgs bundles with fixed determinant of odd degree. For the normalization of the Hitchin metric used in this paper, we prove that the volume of geodesic ball in the Hitchin moduli space is given by $$ \Vol_{g_{L^2}}B_{L^2}(p,R) =\frac{2^{4g-3}π^{9g-9}}{(3g-3)!}\,R^{6g-6}+o(R^{6g-6}) $$ for every $p\in\M$. We also determine the leading asymptotics of Hamiltonian sublevel volumes and exponentially weighted volumes. The proof combines homogeneity of the hyperkähler volume form with metric asymptotics on the regular Hitchin locus. Symplectic reduction and the Prym polarization evaluate the coefficient, which is independently recovered by equivariant localization.
topic: differential-geometry
tags:
  - higgs-nonabelian-hodge
  - moduli
  - hyperkahler-geometry
arxiv_id: "2609.09795v1"
arxiv_url: "https://arxiv.org/abs/2609.09795"
arxiv_submitted: "2026-09-09"
arxiv_updated: "2026-09-09"
summary: >-
  奇数次数の固定行列式を持つ階数2・跡零Higgs束のモジュライ空間について、Hitchin計量の大球の体積漸近を係数まで決定する。実次元$12g-12$に対して体積増大次数が$6g-6$となる現象を、Hitchin系の基底方向とPrymファイバー方向の異なるスケールから説明する。
abstract_en: ""
summary_en: >-
  This work determines the leading large-radius volume growth of the complete Hitchin metric on the fixed-determinant rank-two Higgs-bundle moduli space. Although the manifold has real dimension $12g-12$, its metric-ball volume grows with degree $6g-6$, reflecting the asymptotic geometry of the Hitchin fibration. The leading constant is obtained through the regular semiflat model and Prym geometry, and is checked independently using equivariant localization. Related asymptotics are established for Hamiltonian sublevel sets and exponentially weighted volume.
abstract_ja: >-
  種数$g\geq2$のコンパクトRiemann面上で、奇数次数の固定行列式を持つ階数2・跡零Higgs束のモジュライ空間$\mathcal M$を考える。本論文の規格化によるHitchin計量について、中心$p$によらず測地球の体積が$R^{6g-6}$の次数で増大し、その先頭係数を明示する。Hamiltonianの劣位集合と指数重み付き体積の先頭漸近も求める。証明はhyperkähler体積形式の斉次性、正則Hitchin軌道上の計量漸近、シンプレクティック簡約、Prym偏極を組み合わせ、等変局所化による独立な計算も与える。
abstract_source_url: "https://arxiv.org/abs/2609.09795"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.09795](https://arxiv.org/abs/2609.09795)
- **著者:** Shiyu Cao
- **初回投稿日:** 2026年9月9日
- **最終更新日:** 2026年9月9日
- **主分類・副分類:** math.DG（主分類）, math-ph
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Hitchin方程式は、Riemann面上の安定Higgs束のモジュライ空間に完備hyperkähler計量を与える。階数2、跡零、奇数次数の固定行列式という設定では空間は滑らかであり、Hitchin写像の正則部分はPrym torsorをファイバーとする代数的完全可積分系になる。

本論文はHitchinの$L^2$計量に関する大きな測地球の体積増大を調べる。モジュライ空間の実次元は$12g-12$だが、体積の増大次数はHitchin基底の実次元に等しい$6g-6$である。

主定理は先頭係数まで決定し、同時にHiggs場のノルムから定まるHamiltonian $H$の劣位集合と、$e^{-\varepsilon H}$で重み付けした全体積の漸近も与える。係数はPrym偏極によって評価され、等変局所化からも同じ値が回収される。

次数が全実次元の半分になるのは、semiflat計量において基底の方向がHiggs場のスケーリングで拡大する一方、双対なtorusファイバー方向が同じ仕方では拡大しないためである。

## 背景と問題設定

$X$を種数$g\geq2$のコンパクトRiemann面、$\Lambda$を奇数次数の正則直線束とする。対象は$\det E\simeq\Lambda$、$\operatorname{tr}\Phi=0$を満たす安定Higgs束$(E,\Phi)$のモジュライ空間$\mathcal M$である。奇数次数により半安定性と安定性が一致する。

Hitchin写像は

$$
\operatorname{Hit}:\mathcal M\longrightarrow H^0(X,K_X^2),\qquad (E,\Phi)\longmapsto-\det\Phi
$$

であり、判別式を除いた基底上のファイバーはspectral curve $S_q$に付随する$\operatorname{Prym}(S_q/X)$のtorsorである。この正則部分ではHitchin計量の漸近モデルとしてsemiflat計量が現れる。

## 主結果

### 三つの体積漸近（Theorem 1.5）

$k=3g-3$とし、$A(s)=\operatorname{Vol}_{g_{L^2}}\{H\leq s\}$、中心$p_0$・半径$R$の測地球の体積を$V_{p_0}(R)$、指数重み付き体積を$V_H(\varepsilon)$とする。Introductionで定められた定数

$$
C_H=\frac{2^{7g-6}\pi^{9g-9}}{(3g-3)!},\qquad
C_{\mathrm{ball}}=2^{-k}C_H=\frac{2^{4g-3}\pi^{9g-9}}{(3g-3)!}
$$

に対し、次が成り立つ。

$$
A(s)=C_Hs^k+O(s^{k-1}),
$$

$$
V_{p_0}(R)=C_{\mathrm{ball}}R^{2k}+o(R^{2k}),
$$

$$
V_H(\varepsilon)=k!C_H\varepsilon^{-k}+O(\varepsilon^{-k+1}).
$$

とくに測地球の増大次数は$2k=6g-6$であり、先頭係数は中心$p_0$に依存しない。固定行列式の次数が任意の奇数の場合も、直線束によるtensor積で次数1の場合へ等長に帰着する。

## 証明の見取り図

Higgs場の正実スケーリングに沿ってhyperkähler体積形式を正確に放射分解し、正則Hitchin locus上でHitchin計量をsemiflat計量と比較する。特異なレベル集合の部分は測度零であり、行列式不等式による一様評価が優収束を可能にする。

Hamiltonian劣位集合の係数はDuistermaat--Heckman公式で交点数へ変換され、Prym偏極により評価される。測地球については正則レベル集合のコンパクト exhaustion が下界を、$\sqrt{2H}$のLipschitz評価が上界を与える。最後に等変局所化が係数を別経路で再現する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.09795](https://arxiv.org/abs/2609.09795)
- **Introduction:** Section 1, pp. 2--7
- **Introduction中で言及された主要定理番号:** Theorem 1.5
- **論文構成の説明:** Contents, p. 2; Theorem 1.5直後, p. 5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
