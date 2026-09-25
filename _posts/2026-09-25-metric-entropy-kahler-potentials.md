---
layout: paper
title: "Metric entropy of Kähler potentials"
title_ja: "Kählerポテンシャル空間のmetric entropy"
authors: "Tomoyuki Hisamoto"
arxiv_primary_category: "math.CV"
arxiv_categories:
- math.CV
- math.DG
arxiv_abstract: >-
  We prove sharp metric entropy estimates for spaces of Kähler potentials. In complex dimension $n$, normalized potentials have Kolmogorov entropy of order $\e^{-n}$ in the background $L^1$ metric. On a polarized manifold, a relative-entropy sublevel has the same order in the Mabuchi--Darvas $d_1$ metric, including its full finite-energy closure. The upper bound is $C_X(1+B)^{n+1}\e^{-n}$ for entropy budget $B$. For toric potentials, the sharp exponent is $n/2$.
topic: several-complex-variables
tags:
- pluripotential-theory
arxiv_id: "2609.29002v1"
arxiv_url: "https://arxiv.org/abs/2609.29002"
arxiv_submitted: "2026-09-24"
arxiv_updated: "2026-09-24"
summary: >-
  複素次元 $n$ のコンパクトKähler多様体上で、正規化Kählerポテンシャル空間のKolmogorov entropyが $\varepsilon^{-n}$ のオーダーをもつことを示す。偏極多様体のrelative-entropy sublevelとtoric部分空間についても鋭い被覆数評価を与える。
abstract_en: ''
summary_en: >-
  The paper determines sharp covering-number asymptotics for normalized Kähler potentials. In the background L1 metric the Kolmogorov entropy grows like epsilon to the minus complex dimension. Relative-entropy sublevels in the finite-energy Mabuchi–Darvas geometry satisfy a quantitative bound of the same exponent, while toric symmetry improves the sharp exponent to half the dimension.
abstract_ja: >-
  Kählerポテンシャル空間の被覆数を定量化し、複素次元 $n$ では背景 $L^1$ 距離に関するKolmogorov entropyが $\varepsilon^{-n}$ のオーダーであることを示す。偏極多様体上のrelative entropyが有界な有限エネルギーポテンシャルにも同じ指数の上界を与え、toricの場合には鋭い指数が $n/2$ となる。
abstract_source_url: "https://arxiv.org/abs/2609.29002"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.29002v1](https://arxiv.org/abs/2609.29002)
- **著者:** Tomoyuki Hisamoto
- **初回投稿日:** 2026-09-24
- **最終更新日:** 2026-09-24
- **主分類・副分類:** math.CV, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kählerポテンシャルのコンパクト性を、半径 $\varepsilon$ の球が何個必要かというmetric entropyで定量化する。複素次元 $n$ が被覆数の指数を直接支配する。

背景 $L^1$ 距離では正規化された全ポテンシャル空間のKolmogorov entropyが上下とも $\varepsilon^{-n}$ となる。偏極多様体ではrelative entropy budget $B$ の部分集合をMabuchi–Darvas距離 $d_1$ で覆う数にも明示的上界を得る。

toric対称性の下ではLegendre変換により凸関数の問題へ移り、鋭い指数が $n/2$ に改善する。

## 背景と問題設定

有限エネルギーKählerポテンシャルのentropy sublevelは定性的にはコンパクトである。本論文はこの事実をcovering numberの増大率として精密化する。

## 主結果

### $L^1$ metric entropy（Theorem 1.1）

ある正定数 $c_X,C_X,\varepsilon_X$ が存在し、$0<\varepsilon<\varepsilon_X$ で
$$c_X\varepsilon^{-n}\leq H_\varepsilon(\mathcal H_\omega,d_{L^1})\leq C_X\varepsilon^{-n}$$
が成り立つ。

### finite-energy entropy sublevel（Theorem 1.2）

偏極多様体ではrelative entropyが $B$ 以下の閉包 $K_B$ に対し
$$H_\varepsilon(K_B,d_1)\leq C_X(1+B)^{n+1}\varepsilon^{-n}$$
を得る。

### toricの場合（Theorem 1.3）

Introductionでは概略として、toricポテンシャルに対する鋭いmetric entropy指数は $n/2$ であると述べられている。

## 証明の見取り図

多重スケール近似で $L^1$ 上下界を作り、Bergman近似と有限次元行列空間の被覆を組み合わせて $d_1$ 上界を得る。toricの場合はLegendre対応による $d_1$–$L^1$ 等長性を使う。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.29002](https://arxiv.org/abs/2609.29002)
- **Introduction:** Section 1
- **確認したarXivバージョン:** 2609.29002v1
- **確認したライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
