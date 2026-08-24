---
layout: paper
title: "$L^2$-Dolbeault resolutions and Nadel vanishing on weakly pseudoconvex complex spaces with singular Hermitian metrics"
title_ja: "特異Hermitian計量をもつ弱擬凸複素空間上のL²-Dolbeault分解とNadel消滅"
authors: "Yuta Watanabe"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  In this paper, in order to develop a more general $L^2$-theory for the $\overline{\partial}$-operator on complex spaces, we provide $L^2$-Dolbeault fine resolutions and isomorphisms, and $L^2$-estimates, for holomorphic line bundles on complex spaces equipped with singular Hermitian metrics. As applications, we obtain several generalizations of the Nadel vanishing theorem.
topic: several-complex-variables
tags:
  - l2-methods
  - complex-analytic-spaces
  - multiplier-ideals-extension
  - positivity
arxiv_id: "2602.03332v2"
arxiv_url: "https://arxiv.org/abs/2602.03332"
arxiv_submitted: "2026-02-03"
arxiv_updated: "2026-07-15"
summary: >-
  特異Hermitian計量を備えた直線束について、特異複素空間上の $L^2$-Dolbeault fine resolutionと大域的 $L^2$ 評価を構成する。これをGrauert–Riemenschneider標準層と結び付け、弱擬凸空間やコンパクトMoishezon空間におけるNadel型・Kawamata–Viehweg型消滅を導く。
abstract_en: ""
summary_en: >-
  The paper develops a Dolbeault framework for square-integrable forms on singular complex spaces when the twisting line bundle carries a singular Hermitian metric. It identifies the resulting complex with a weighted Grauert–Riemenschneider canonical sheaf and proves global estimates for the weak d-bar operator. These tools yield Nadel-type vanishing on weakly pseudoconvex spaces and further vanishing statements for compact Moishezon spaces.
abstract_ja: >-
  複素空間上の特異Hermitian計量付き正則直線束に対し、$\bar\partial$ 作用素の一般的な $L^2$ 理論を構築する。$L^2$-Dolbeault fine resolution、コホモロジーとの同型、大域的 $L^2$ 評価を与え、その応用としてNadel消滅定理の複数の一般化を得る。
abstract_source_url: "https://arxiv.org/abs/2602.03332"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.03332](https://arxiv.org/abs/2602.03332)
- **著者:** Yuta Watanabe
- **初回投稿日:** 2026年2月3日
- **最終更新日:** 2026年7月15日（v2）
- **主分類:** math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$\bar\partial$ の $L^2$ 理論は複素多様体上では基本的な道具であるが、特異複素空間ではDolbeault分解や評価の構築自体に困難がある。本論文は、特異Hermitian計量をもつ直線束と滑らかなHermitianベクトル束によるtwistを同時に扱う。

まず、重み付きGrauert–Riemenschneider標準層を解消する $L^2$-Dolbeault複体を構成し、層コホモロジーとの同型を与える。従来必要だった実偏極Hodge構造の変動や空間のコンパクト性を仮定しない。

次に弱擬凸複素空間の正則部分上で大域的 $L^2$ 評価を示し、Nadel型消滅へ結び付ける。さらにコンパクトMoishezon空間ではKähler性や射影性を仮定せず、bigな直線束に対する高次コホモロジー消滅を得る。

## 背景と問題設定

$X$ を純次元 $n$ の複素空間とする。局所可積分関数 $\varphi$ に対する $\omega_X^{\mathrm{GR}}(\varphi)$ は、正則部分上の正則 $n$-形式で

$$
i^{n^2}s\wedge\bar s\,e^{-2\varphi}\in L^1_{\mathrm{loc}}
$$

を満たすものからなる。解消 $\pi:\widetilde X\to X$ に対して、Introductionはこれを $\pi_*(K_{\widetilde X}\otimes\mathcal I(\pi^*\varphi))$ と結び付ける。

## 主結果

### $L^2$-Dolbeault fine resolution（Theorems 1.1, 1.2）

直線束 $L$ の特異Hermitian計量 $h$ の局所weightが準多重劣調和なら、

$$
0\to\omega_X^{\mathrm{GR}}(h)\otimes\mathcal O_X(E\otimes L)
\to\mathcal L^{n,0}_{E\otimes L}\xrightarrow{\bar\partial}
\mathcal L^{n,1}_{E\otimes L}\xrightarrow{\bar\partial}\cdots
$$

はfine resolutionとなり、そのglobal section複体のコホモロジーが層コホモロジーを計算する。標準解消上でも、乗数イデアルを含む対応する同型を得る。

### 大域的評価とNadel型消滅（Theorems 1.3, 1.4）

弱擬凸Kähler複素空間で、曲率が $i\Theta_{L,h}\ge\varepsilon\omega$ を満たし、$E$ が適切なDemailly半正値性をもつとする。$\bar\partial f=0$ かつ右辺が有限なら $\bar\partial u=f$ を解けて、

$$
\int_X|u|^2\le\frac1q\int_X\frac1\varepsilon|f|^2
$$

を得る。Nakano半正値の場合は全ての $q>0$ に適用でき、fine resolutionと合わせて $H^q(X,\omega_X^{\mathrm{GR}}(h)\otimes\mathcal O_X(E\otimes L))=0$ を導く。

### コンパクトMoishezon空間での消滅（Theorem 1.5, Corollary 1.6）

$L$ がbigなら適切な正曲率特異計量 $h$ が存在し、全ての $q>0$ について対応する高次コホモロジーが消える。特にMoishezon空間上のnefかつbigな $L$ について

$$
H^q(X,\omega_X^{\mathrm{GR}}\otimes\mathcal O_X(L))=0
$$

となり、射影性やklt条件を要求しないKawamata–Viehweg型の結論を与える。

## 証明の見取り図

strong openness propertyとDemailly近似から特異weightを制御し、正則部分上の弱い $\bar\partial$ 作用素に対する局所・大域 $L^2$ 評価を確立する。canonical desingularization上の乗数イデアル表示を介して $L^2$ 複体とGrauert–Riemenschneider標準層を同定し、解の存在をコホモロジー消滅へ移す。

## 原論文との対応

- **Abstractページ:** [arXiv:2602.03332](https://arxiv.org/abs/2602.03332)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.5, Corollary 1.6
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
