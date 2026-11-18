---
layout: paper
title: On strongly pseudoconvex Kähler--Berwald manifolds
title_ja: 強擬凸Kähler–Berwald計量の分解と一意化
authors: Xiaoshu Ge, Xiangyu Zhou
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
arxiv_abstract: 'In this paper, we establish the equivalence between the Kähler--Finsler and Kähler--Berwald conditions for complex Finsler metrics. That is, a Kähler--Finsler metric always satisfies the complex Berwald condition: its Chern--Finsler nonlinear connection reduces to the Chern connection of a Kähler metric. We also provide, for the first time, smooth weakly Kähler--Finsler examples which are not Kähler--Berwald; and propose a condition that is formally stronger than weakly Kähler--Finsler, with equivalence holding in complex dimension two. Then we prove the de Rham decomposition and uniformization theorems for Kähler--Berwald manifolds, and show that every strongly pseudoconvex locally symmetric complex Finsler metric is both Kähler--Berwald and complex Einstein--Finsler. Additionally, we establish several rigidity theorems for the Kobayashi and Carathéodory metrics: $F_K$ is Kähler--Berwald if and only if it is Kähler; if the manifold is simply connected, then $F_C$ is Kähler--Berwald
  if and only if it is Kähler.'
topic: differential-geometry
tags:
- curvature
- uniformization
- hyperbolicity
arxiv_id: 2611.21573v1
arxiv_url: https://arxiv.org/abs/2611.21573
arxiv_submitted: '2026-11-16'
arxiv_updated: '2026-11-16'
summary: 強擬凸複素Finsler幾何でKähler–Finsler条件からBerwald性が従うことを示し、分解定理と定曲率一意化を整備する。Kobayashi・Carathéodory計量への応用では、Kähler–Berwald性が実際にはHermitian Kähler性や球の特徴づけに結び付く。
abstract_en: ''
summary_en: Several notions of Kähler geometry coexist for complex Finsler metrics. The paper identifies a connection-theoretic consequence of the Kähler–Finsler condition under strong pseudoconvexity and develops decomposition and curvature classifications in that setting. Applications concern intrinsic metrics of complex manifolds and the characterization of the ball. The weaker Kähler–Finsler condition remains distinct and admits different behavior.
abstract_ja: 複素Finsler計量には複数のKähler条件があり、接続が接ベクトルに依存するかどうかも幾何を左右する。本論文は強擬凸の設定でKähler–Finsler計量がKähler–Berwald計量であることを証明し、局所対称空間、de Rham型分解、定正則断面曲率の分類を統一的に扱う。弱いKähler条件だけでは同じ結論にならないことを、不変計量の例と剛性結果によって明確にする。
abstract_source_url: https://arxiv.org/abs/2611.21573
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.21573v1](https://arxiv.org/abs/2611.21573)
- **著者:** Xiaoshu Ge, Xiangyu Zhou
- **初回投稿日:** 2026-11-16
- **最終更新日:** 2026-11-16
- **主分類・副分類:** math.DG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素Finsler計量は、各接空間のノルムをHermitian内積に由来するものに限らず扱う。従って、通常のKähler幾何の「接続が複素構造と整合する」という性質にも複数の拡張が生じる。本論文はその間の関係を整理し、強擬凸Kähler–Finsler計量では接続係数が接ベクトルに依存しないBerwald性が自動的に従うと主張する。

この同値性を基盤に、局所対称性の特徴づけ、de Rham型分解、非負正則双断面曲率のもとでの普遍被覆の構造、定正則断面曲率の一意化を示す。従来の強い実凸性などの追加条件を取り除き、強擬凸複素Finsler幾何の枠内で体系を作る点が中心である。

Kobayashi計量やCarathéodory計量に適用すると、Kähler–Berwald性は新しい非Hermitianの自由度を許さず、Kähler性へ戻る。球の剛性や一意化につながる一方、弱Kähler–Finsler条件だけでは球以外の領域も存在するため、各条件を区別する必要がある。

## 背景と問題設定

$G=F^2$ の接方向Levi形式が正定値であることを強擬凸性という。Chern–Finsler接続の係数 $\Gamma^l\_{i;j}(z,v)$ が $v$ に依存しない場合がBerwald型である。強Kähler–Finsler条件とKähler–Finsler条件の同値性は既知であり、本論文はそこへBerwald性を加える。

## 主結果

### Kähler条件とBerwald性（Theorem 1.5）

強擬凸の設定で、Kähler–Finsler計量はKähler–Berwald計量である。Introductionは関係を

$$
\mathrm{KB}\iff\mathrm{SKF}\iff\mathrm{KF}
\iff(\mathrm{WKF}+\mathrm B)
$$

とまとめる。一方、$\mathrm{WKF}$ だけから $\mathrm{KF}$ は従わない。従って、弱い条件についてまで同値性が得られたわけではない。

### 局所対称性（Theorems 1.7–1.8）

強擬凸局所対称複素Finsler計量はKähler–Berwaldかつ複素Finsler–Einsteinであり、同じ接続を持つ対応するHermitian計量も局所対称になる。さらに完備Kähler–Berwald計量の局所対称性は、水平曲率 $R^H$ に対する

$$
\nabla\_H R^H=0\qquad(H\in\mathcal H)
$$

と同値である。ここで $\mathcal H$ は接続の水平部分を表す。

### 分解定理と非負曲率（Theorems 1.10, 1.12–1.13）

連結Kähler–Berwald多様体は局所的に、Kähler空間、複素Minkowski空間、階数 $r\ge2$ の局所既約・局所対称・非HermitianなKähler–Berwald空間、またはそれらのDescartes積に分類される。単連結かつ完備なら、この分解が大域的に得られる。

ここでDescartes積は通常のHermitian直積計量とは異なり、計量が因子の二乗ノルムの和になるとは限らない。コンパクトで正則双断面曲率が非負なら、普遍被覆の因子は複素Minkowski空間、非負双断面曲率のKähler計量を持つ複素射影空間、階数2以上の既約コンパクト型対称複素Finsler空間に限られる。

### 定曲率の一意化（Theorem 1.15）

単連結・完備なKähler–Berwald多様体で正則断面曲率が定数 $c$ なら、正規化に応じて次のモデルと正則等長になる。

$$
\begin{array}{c|c}
c=-4 & \mathbb B^n\ \text{のBergman計量}\\
c=0 & \mathbb C^n\ \text{のMinkowski計量}\\
c=4 & \mathbb P^n\ \text{のFubini--Study計量}
\end{array}
$$

零曲率の場合はEuclidean計量だけに限定されない。非零曲率はスケーリングによって上の規格化で表される。

### 不変計量の剛性（Theorems 1.21–1.22）

Kobayashi計量 $F\_K$ はKähler–BerwaldであることとKählerであることが同値である。Carathéodory計量 $F\_C$ についても、基礎多様体が単連結なら同じ同値性が成立する。

さらに完備双曲複素多様体で、ある一点において $F\_K=F\_C$ と仮定する。このとき、$F\_K$ が滑らかなKähler–Berwald計量であること、$F\_C$ が滑らかなKähler–Berwald計量で多様体が単連結であること、そして多様体が $\mathbb B^n$ と双正則であることは同値である。滑らかな有界強凸領域が球でなければ、そのKobayashi計量は弱Kähler–FinslerであってもBerwaldではない。

## 証明の見取り図

Introductionは、Kähler–Berwald計量と同じ接続を持つKähler計量を対応させるAikouの理論を基礎として挙げる。そこへ平行移動と等長性の関係、Berger–Simonsのホロノミー理論、Kähler幾何の分解定理を組み合わせる。

局所対称性では、各点を孤立固定点に持つ正則等長な測地対称を接続の構造へ移す。分解因子が全測地的で、その正則断面曲率・双断面曲率が元の空間から制限されることを使い、既知のKähler幾何の結果をFinsler側へ運ぶ。不変計量への応用では既知のKähler剛性定理と新たな同値性を接続する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.21573)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.21573v1) — Section 1, pp. 1–13
- **Introduction中で言及された主要結果:** Theorems 1.5, 1.7–1.8, 1.10, 1.12–1.13, 1.15, 1.17, 1.21–1.22; Corollaries 1.1–1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.21573v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
