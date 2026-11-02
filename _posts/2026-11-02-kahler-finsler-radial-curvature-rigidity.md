---
layout: paper
title: Rigidity of Kähler-Finsler Metrics with Constant Radial Curvature
title_ja: 定放射曲率Kähler–Finsler計量の剛性と球一意化
authors: Jinling Li, Longjie Li, Chunhui Qiu
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: In this paper, we prove that a smooth strongly pseudoconvex K\"ahler--Finsler metric $F$ satisfying the constant radial curvature condition \[ \Omega(\chi,\bar\chi)\chi=cF^2\chi, c\in\mathbb R\setminus\{0\}, \] is induced by a Hermitian K\"ahler metric of holomorphic sectional curvature $2c$. Under the Abate--Patrizio curvature symmetry \[ \langle\Omega(\cdot,\bar\chi)\chi,\chi\rangle =\langle\Omega(\chi,\bar\chi)\cdot,\chi\rangle, \] this result gives Hermitian rigidity for nonzero constant holomorphic sectional curvature and the classification of complete simply connected metrics of negative curvature. As an application, we show that the Kobayashi metric of a bounded strongly convex domain with smooth boundary is K\"ahler--Finsler if and only if the domain is biholomorphic to the unit ball. We also prove that the universal cover of a bounded strongly pseudoconvex domain $D $ with smooth boundary is biholomorphic to the unit ball if and only if its Kobayashi metric is a
  smooth strongly pseudoconvex K\"ahler--Finsler metric. Furthermore, we give two explicit examples to illustrate the distinction between the weakly K\"ahler--Finsler and K\"ahler--Finsler conditions.
topic: several-complex-variables
tags:
- curvature
- uniformization
- hyperbolicity
arxiv_id: 2610.39989v1
arxiv_url: https://arxiv.org/abs/2610.39989
arxiv_submitted: '2026-10-29'
arxiv_updated: '2026-10-29'
summary: 非零の定放射曲率を持つ滑らかで強擬凸なKähler–Finsler計量が、Hermitian Kähler計量に由来することを示す。Kobayashi計量への応用として、強凸領域の球との同値性と、強擬凸領域の普遍被覆が球となる条件を与える。
abstract_en: ''
summary_en: The paper identifies curvature assumptions that force a complex Finsler metric to come from a Hermitian quadratic form. Its local rigidity theorem includes the negative-curvature case. Applying it to the Kobayashi metric gives geometric tests for a domain, or its universal cover, to be a ball. The smoothness and strong pseudoconvexity assumptions on that metric remain part of those tests.
abstract_ja: Finsler計量の方向依存性が曲率条件によって消える現象を研究する。非零の定放射曲率とKähler–Finsler条件のもとでHermitian剛性を示し、追加の曲率対称性を伴う定正則断面曲率にも適用する。滑らかな境界を持つ有界強凸領域ではKobayashi計量がKähler–Finslerであることが球との双正則同値性を特徴づける。有界強擬凸領域では、境界近傍の滑らかで強擬凸なKähler–Finsler条件から球普遍被覆を導く。
abstract_source_url: https://arxiv.org/abs/2610.39989
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.39989v1](https://arxiv.org/abs/2610.39989)
- **著者:** Jinling Li, Longjie Li, Chunhui Qiu
- **初回投稿日:** 2026-10-29
- **最終更新日:** 2026-10-29
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素Finsler計量は、接ベクトルの長さをHermitian二次形式より柔軟に記述できる。その自由度が、Kähler型の条件と一定の曲率を課すことで失われるかが本論文の中心問題である。

著者らは、零でない一定の放射曲率を持つ滑らかで強擬凸なKähler–Finsler計量が、実際にはHermitian Kähler計量になることを示す。局所的な剛性であり、正曲率と負曲率の両方を対象にする。定正則断面曲率からこの結論を得る際には、追加の曲率対称性を必要とする。

応用は有界領域のKobayashi計量による球の特徴づけである。強凸領域では領域そのもの、強擬凸領域では普遍被覆が球になるという、異なる結論を区別する。また弱Kähler–Finsler条件だけでは十分でなく、強擬凸領域では計量の滑らかさと強擬凸性も明示的な仮定となる。

## 背景と問題設定

$G=F^2$、$\Omega$ をChern–Finsler接続の曲率作用素、$\chi$ を水平放射ベクトル場とする。本論文の中心条件は

$$
\Omega(\chi,\bar\chi)\chi=cG\chi,\qquad c\in\mathbb R\setminus\lbrace 0\rbrace
$$

である。Abate–Patrizioの関係により、Kähler–Finslerの場合これは $K\_F=2c$ と次の曲率対称性の組合せに対応する。

$$
\langle\Omega(H,\bar\chi)\chi,\chi\rangle\_g
=\langle\Omega(\chi,\bar\chi)H,\chi\rangle\_g
\qquad(H\text{ は水平ベクトル}).
$$

## 主結果

### Hermitian剛性（Theorem 1.1）

複素多様体上の滑らかで強擬凸なKähler–Finsler計量が上記の放射曲率条件を満たせば、正則断面曲率 $2c$ のHermitian Kähler計量に由来する。$c=0$ は仮定から除かれており、結論を平坦な場合へ拡張してはいない。

### 完備負曲率の場合（Theorem 1.2）

連結な複素 $n$ 次元多様体上で $K\_F=2c\ne0$ と上記対称性を仮定するとHermitian剛性が成り立つ。さらに $c<0$、単連結、完備なら、球のKobayashi計量 $\kappa\_{\mathbb B^n}$ を用いて

$$
(M,F)\simeq\left(\mathbb B^n,\sqrt{-\frac{2}{c}}\thinspace \kappa\_{\mathbb B^n}\right)
$$

という双正則等長同型を得る。

### 強凸領域の特徴づけ（Theorem 1.3）

$C^\infty$ 境界を持つ有界強凸領域 $D\Subset\mathbb C^n$ のKobayashi計量は、滑らかで強擬凸な弱Kähler–Finsler計量で、放射曲率条件を $c=-2$ で満たす。この設定では、$\kappa\_D$ がKähler–Finslerであること、Hermitian計量であること、$D\simeq\mathbb B^n$ が同値となる。

### 強擬凸領域と球普遍被覆（Theorem 1.4）

$n\geq2$ とし、$D\Subset\mathbb C^n$ が $C^\infty$ 境界を持つ強擬凸領域であるとする。次の条件は同値である。

1. $\kappa\_D$ が領域全体で滑らかで強擬凸なKähler–Finsler計量である。
2. ある $\epsilon>0$ に対し、$V\_\epsilon=\lbrace z\in D:\operatorname{dist}(z,\partial D)<\epsilon\rbrace $ 上でその条件を満たす。
3. $\kappa\_D$ は正則断面曲率 $-4$ のHermitian Kähler計量である。
4. 普遍被覆 $\widetilde D$ は $\mathbb B^n$ に双正則同値である。

第2条件は $D$ のKobayashi計量の制限に関する条件である。$D$ が単連結なら、結論は $D\simeq\mathbb B^n$ となる。

## 証明の見取り図

Introductionは、Kähler–Finsler計量の恒等式を整理して剛性を示し、そこから古典的Kähler空間形の分類へ進む構成を説明している。強凸領域ではLempert理論と正則レトラクトがKobayashi計量の放射曲率条件につながる。強擬凸領域では、Hermitian KählerなKobayashi計量と球普遍被覆を結ぶGaussier–Zimmerの既知の結果を用いる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.39989)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.39989v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.1–1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.39989v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
