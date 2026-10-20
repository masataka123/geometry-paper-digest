---
layout: paper
title: Invariance of logarithmic plurigenera and adjoint volumes in Kähler families
title_ja: Kähler族における対数多重種数と随伴体積の不変性
authors: Kefeng Liu, Xueyuan Wan
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: We consider smooth proper families of compact complex manifolds over a disk whose total space is K\"ahler, together with a boundary divisor with relative simple normal crossings. We prove that, if the boundary is a rational divisor with coefficients in $[0,1)$, every logarithmic pluricanonical form on a fiber extends to a neighborhood of that fiber, and hence that the logarithmic plurigenera are constant. No positivity of the log canonical class is assumed. We prove further that, for real boundary coefficients in $[0,1]$, a log-adjoint class twisted by a smooth semipositive form has the same volume on every fiber, and that it is pseudoeffective either on every fiber or on none. When the log-adjoint class is nef on every fiber, we give a second proof of the extension theorem, which does not use the minimal model program.
topic: several-complex-variables
tags:
- moduli
- birational-geometry
- multiplier-ideals-extension
- kahler-einstein-metrics
- minimal-model-program
arxiv_id: 2610.26519v1
arxiv_url: https://arxiv.org/abs/2610.26519
arxiv_submitted: '2026-10-19'
arxiv_updated: '2026-10-19'
summary: 全空間がKählerである滑らかな固有族と相対単純正規交叉境界について、係数が1未満の有理境界なら対数多重標準切断が局所拡張し、多重種数が不変となることを示す。さらに係数1を許す実境界と滑らかな半正の捻りに対し、随伴類の擬有効性と体積の不変性を得る。
abstract_en: ''
summary_en: The paper studies how logarithmic canonical data persist in families with Kähler total space. Extension of fiberwise sections gives constancy of logarithmic plurigenera under relative normal-crossing hypotheses. A separate result controls the volume and pseudoeffectivity of real adjoint classes, allowing boundary coefficient one but requiring a smooth semipositive representative for the twist.
abstract_ja: 射影性や対数標準類のnef性・bignessを仮定せず、Kählerな全空間を持つ族で対数多重標準切断の拡張を扱う。境界が相対単純正規交叉で係数が1未満の有理数なら、各切断が近傍へ拡張し、順像は局所自由で基底変換と可換になる。実係数を1まで許した境界については、全空間上の滑らかな半正形式で捻った随伴類の体積と擬有効性がファイバーによらないことも示す。
abstract_source_url: https://arxiv.org/abs/2610.26519
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.26519v1](https://arxiv.org/abs/2610.26519)
- **著者:** Kefeng Liu, Xueyuan Wan
- **初回投稿日:** 2026-10-19
- **最終更新日:** 2026-10-19
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

多重種数は複素多様体の双有理幾何の基本的な不変量であるが、族の中で切断空間の次元は特別なファイバー上で跳び上がる可能性がある。これを排除するには、そのファイバーの多重標準切断を近くのファイバーへ拡張することが重要となる。

本論文は、全空間がKählerである滑らかな固有族に相対単純正規交叉の境界を加え、対数多重標準切断の拡張を示す。係数が1未満の有理境界を扱い、対数標準類のnef性やbignessは仮定しない。

別の主定理は実係数の境界と半正の捻りを扱い、随伴類の擬有効性と体積がファイバーによらないことを示す。こちらは境界係数1も許すが、捻りが全空間上で滑らかな半正形式により表されることが必要である。

## 背景と問題設定

$p:\mathcal X\to\Delta$を円板への固有正則submersionとし、ファイバー$X\_t$は連結コンパクト複素多様体、全空間$\mathcal X$はKählerとする。境界$B=\sum\_i b\_iD\_i$が相対単純正規交叉であるとは、底の座標$t$を含む局所座標で各成分が異なるファイバー方向の座標超平面となることをいう。成分やその交叉が底上で滑らかに動くという仮定である。

有理境界に対する対数多重種数は、$mB$が整となる$m$について
$$
P\_m(X\_t,B\_t)=h^0\left(X\_t,\mathcal O\_{X\_t}(m(K\_{X\_t}+B\_t))\right)
$$
である。射影族での既存の不変性定理と、境界のないKähler族での近年の結果を、対数的な設定へ進めることが課題となる。

## 主結果

### 切断の拡張と対数多重種数（Theorem 1.1）

$b\_i\in\mathbb Q$かつ$0\leq b\_i<1$とする。$m\geq1$で$mB$が整なら、$X\_0$上の全ての$m(K\_{X\_0}+B\_0)$の切断は、十分小さい円板$U$上へ$m(K\_{\mathcal X/\Delta}+B)$の切断として拡張する。その結果、
$$
t\longmapsto h^0\left(X\_t,m(K\_{X\_t}+B\_t)\right)
$$
は局所定数となり、$p\_*\mathcal O\_{\mathcal X}(m(K\_{\mathcal X/\Delta}+B))$は局所自由で正則基底変換と可換になる。

対数標準類がnefでもbigでもない場合、特に体積が零の場合を排除しない。Corollary 1.2では$0\leq b\_i<1$の実係数に対して、各$m$の$mK\_{X\_t}+\lfloor mB\_t\rfloor$について同様の結論を得る。これは有理境界$m^{-1}\lfloor mB\rfloor$への適用である。

### 実随伴類の体積と擬有効性（Theorem 1.3）

今度は$0\leq b\_i\leq1$の実係数とし、$\beta$を全空間上の滑らかな閉半正実$(1,1)$形式とする。
$$
a\_t=c\_1(K\_{X\_t}+B\_t)+[\beta\_t]
$$
について、一つのファイバーで擬有効なら全ファイバーで擬有効であり、
$$
\operatorname{vol}(a\_t)=\text{constant}
$$
となる。特に一つでbigなら全てでbigである。ここで擬有効類の体積は、その類の閉正カレント$T$を動かした$\int T\_{\mathrm{ac}}^n$の上限であり、擬有効でない場合は零とする。

境界係数1が許されるのはこの体積の主張である。また任意の相対nefな捻りを扱う定理ではなく、滑らかな半正代表の存在を要求する。相対単純正規交叉条件も本質的で、境界のstrataが退化する状況へ無条件に延長できない。

## 証明の見取り図

Ohsawa–Takegoshi型拡張定理を使うため、中心ファイバーの切断に合わせて特異性を制御した正曲率計量を作る。対数標準類をKähler類の小さな倍数で摂動し、捻れKähler–Einstein方程式の解の極限から計量を得る。

各ファイバーでの解を全空間上で共通に規格化するには、摂動した体積の不変性が必要となる。nefの場合は体積が交点数となり、錐的Kähler–Einstein計量の変動を使う短い証明があり、極小モデル・プログラムを必要としない。

一般の場合はKähler極小モデル・プログラムと超越的基点自由定理でモデルを構成する。境界と負の因子部分の重なりを処理し、例外因子に沿う密度の零点と境界に沿う極を制御して、計量を元の族へ降ろす。係数1の体積の主張には近似を用いる、という流れがIntroductionに述べられる。

## 原論文との対応

- **Abstractページ:** [Invariance of logarithmic plurigenera and adjoint volumes in Kähler families](https://arxiv.org/abs/2610.26519)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.26519v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3; Corollary 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.26519v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
