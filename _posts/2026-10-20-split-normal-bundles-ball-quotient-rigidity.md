---
layout: paper
title: Split Normal Bundles and Rigidity of Holomorphic Immersions from Compact Ball Quotients
title_ja: 法束の直線束分解から従う球商の正則はめ込みの剛性
authors: Rong Du
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
arxiv_abstract: Let $f$ be a holomorphic immersion from a compact complex hyperbolic space form into a higher-dimensional complex hyperbolic space form. We prove that if the normal bundle decomposes as a direct sum of holomorphic line bundles, then the immersion is totally geodesic. This result has no restriction on the codimension and extends, under the splitting hypothesis, the classical rigidity theorem of Cao--Mok. The proof uses the polarized complex variation of Hodge structure induced from the target. The line-bundle decomposition produces nef zero-Higgs line quotients, and a Chern-character identity forces the Gauss-defect form to have nontrivial nullity at every point. The null-foliation and boundary argument of Cao--Mok then shows that the defect vanishes identically. In particular, this answers a question posed by Mok almost twenty years ago about decomposable normal bundles for complex surfaces immersed in four-dimensional complex hyperbolic space forms.
topic: differential-geometry
tags:
- vector-bundles-sheaves
- curvature
- uniformization
- higgs-nonabelian-hodge
- chern-classes
arxiv_id: 2610.24374v1
arxiv_url: https://arxiv.org/abs/2610.24374
arxiv_submitted: '2026-10-17'
arxiv_updated: '2026-10-17'
summary: コンパクトな複素球商から高次元の球商への正則はめ込みについて、法束が直線束の直和なら全測地的になることを示す。始域の複素次元を2以上とする一方、余次元の上限を課さず、法束の分解性を幾何的剛性へ結び付ける。
abstract_en: ''
summary_en: A decomposable normal bundle supplies a rigidity criterion for immersions between complex ball quotients. The domain is compact and has dimension at least two, while the codimension is unrestricted. The argument connects line-bundle positivity and Chern identities to the vanishing directions of the curvature defect.
abstract_ja: コンパクト球商から滑らかな球商への正則はめ込みを対象に、法束の正則な直線束分解が全測地性を強制すると示す。従来の低余次元の剛性とは異なり、余次元に上限はない。証明では法束の分解から得られるnefな直線束とChern類の関係を使って曲率の差に零方向を作り、既存の零葉層の剛性議論へ接続する。
abstract_source_url: https://arxiv.org/abs/2610.24374
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.24374v1](https://arxiv.org/abs/2610.24374)
- **著者:** Rong Du
- **初回投稿日:** 2026-10-17
- **最終更新日:** 2026-10-17
- **主分類・副分類:** math.DG（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

球商の間の正則はめ込みが全測地的であるとは、第二基本形式が消え、始域の測地線が標的の幾何と整合するという強い剛性である。既知の定理では始域と標的の次元差を小さくする条件が重要であった。

本論文は、その代わりに法束が正則直線束の直和になるという条件を置く。始域が複素次元2以上のコンパクト球商なら、この分解性だけから、余次元を制限せずにはめ込みの全測地性が従う。

法束の分解が曲率を直接零にするわけではない。分解から得られるnefな直線束とChern類の恒等式によって曲率差の二乗の交点数が零となり、零方向が生じる。その後に球商特有の零葉層と境界の剛性が働く。

## 背景と問題設定

$X=\mathbb B^n/\Gamma$をコンパクトな滑らかな球商、$M=\mathbb B^m/\Lambda$を滑らかな球商とし、$f:X\to M$を正則はめ込みとする。$n\geq2$かつ$m>n$を仮定するが、$M$のコンパクト性は仮定しない。法束は
$$
0\longrightarrow T\_X\longrightarrow f^*T\_M\longrightarrow N\_f\longrightarrow0
$$
で定まる。

Cao–Mokの定理は$m\leq2n-1$の範囲で全測地性を与える。高余次元ではその次元評価をそのまま使えず、法束の性質を入力とする別の条件が必要となる。

## 主結果

### 余次元を制限しない剛性（Theorem 1.1）

法束が正則直線束の直和
$$
N\_f\simeq\bigoplus\_{i=1}^{m-n}L\_i
$$
に分解するなら、$f$は全測地的である。球の正則断面曲率を$-2$とする規格化では等長はめ込みでもある。

ここで重要なのは、分解が滑らかな束としてではなく正則束として存在することである。余次元は任意であるが、全ての高余次元はめ込みの剛性を主張する定理ではない。

### 二次元から四次元への場合（Corollary 1.2）

$n=2,m=4$なら、階数2の法束が分解可能であることから全測地性が従う。従って非全測地的なはめ込みが存在するとすれば、その法束は非分解でなければならない。これは存在定理ではなく、候補に課す必要条件である。

## 証明の見取り図

Introductionでは$K=c\_1(K\_X)$、$D=f^*c\_1(K\_M)$とおき、
$$
\alpha=\frac{K}{n+1}-\frac{D}{m+1}
$$
を考える。Gauss方程式により、この類は半正の曲率差形式$\eta$で表され、$\eta=0$と第二基本形式の消滅が対応する。

有限étale被覆を経てモノドロミーを偏極複素Hodge構造の変動に組み込み、法束の各直線束からHiggs場が零の直線商$A\_i$を得る。曲線への制限を通してこれらがnefであると分かり、
$$
\sum\_i\exp(c\_1(A\_i))=m+1-(n+1)\exp(-\alpha)
$$
というChern類の恒等式の一次・二次部分を比較する。双方の正値性が逆向きの制約を与え、$\alpha^2K^{n-2}=0$を導く。

これにより$\eta$は各点に零方向を持つ。残る段階ではCao–Mokの零葉層と境界の議論を使い、零方向の存在から全測地性へ進む。従来の余次元条件が担っていた零方向の確保を、法束の分解性から行う点が新しい。

## 原論文との対応

- **Abstractページ:** [Split Normal Bundles and Rigidity of Holomorphic Immersions from Compact Ball Quotients](https://arxiv.org/abs/2610.24374)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.24374v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1; Corollary 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.24374v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
