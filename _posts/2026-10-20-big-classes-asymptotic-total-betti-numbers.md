---
layout: paper
title: Invariants of big classes from asymptotic total Betti numbers
title_ja: 高次超曲面の総Betti数から定まるbig類の不変量
authors: Michele Ancona, Junyan Cao
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We introduce and study a new numerical invariant of big line bundles on normal complex projective varieties, defined in terms of the total Betti number of hypersurfaces associated with high tensor powers of the line bundle. We prove that this invariant is birational and provides an upper bound for the volume of the line bundle. When the big line bundle admits a rational Zariski decomposition, we show that the invariant coincides with the volume. In particular, this holds when the line bundle is ample or is defined on a projective surface. We also investigate the analogous problem in the real algebraic setting, proving the existence of real algebraic hypersurfaces associated with high tensor powers of a big line bundle whose real vanishing loci have arbitrarily large total Betti numbers.
topic: algebraic-geometry
tags:
- positivity
- birational-geometry
arxiv_id: 2610.24134v1
arxiv_url: https://arxiv.org/abs/2610.24134
arxiv_submitted: '2026-10-16'
arxiv_updated: '2026-10-16'
summary: big直線束の高い冪の線形系に属する超曲面の総Betti数から、新しい漸近不変量βを定義する。正規射影多様体上で体積はβ以下となり、有理Zariski分解が存在する場合には一致するほか、βの双有理不変性と実超曲面への応用を示す。
abstract_en: ''
summary_en: The topology of divisors provides an alternative asymptotic measurement of a big line bundle. Taking maximal total Betti numbers in its large tensor powers defines a finite invariant that dominates volume. Birational invariance and equality under rational Zariski decomposition connect this topological construction to established positivity invariants.
abstract_ja: 切断空間の次元から定まる体積に対して、切断の零点集合のトポロジーからbig直線束を測る不変量を導入する。高い冪の全線形系内で総Betti数の上限を取り、次元に応じて規格化した極限上限がβである。正規射影多様体では体積を上から抑え、有理Zariski分解を持つ場合、特に豊富な束や正規射影曲面上のbigな束では体積と一致する。
abstract_source_url: https://arxiv.org/abs/2610.24134
license_name: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
license_url: http://creativecommons.org/licenses/by-nc-nd/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.24134v1](https://arxiv.org/abs/2610.24134)
- **著者:** Michele Ancona, Junyan Cao
- **初回投稿日:** 2026-10-16
- **最終更新日:** 2026-10-16
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

直線束の体積は、高い冪の大域切断がどれだけ増えるかを測る。本論文は切断の数ではなく、その零点超曲面の総Betti数がどれほど大きくなり得るかに注目し、big直線束の新しい不変量を作る。

線形系の中の全ての超曲面を動かした上限を取り、冪の次数の$n$乗で規格化することで、有限かつ正の量$\beta(L)$を得る。著者らはそれがChern類に依存すること、双有理引き戻しで変わらないこと、そして体積の上界になることを示す。

有理Zariski分解が存在すると上界は等号となる。特に正規射影曲面上のbig直線束や、任意次元の正規射影多様体上の豊富な直線束では、トポロジーから得た量が体積に一致する。さらに実超曲面の実点集合の総Betti数にも下界を与える。

## 背景と問題設定

$n$次元射影多様体$X$とbig直線束$L$について、Definition 1.1は
$$
\beta(L)=\limsup\_{m\to\infty}\frac1{m^n}\sup\_{Z\in|mL|}b^*(Z)
$$
と定める。$b^*$はBetti数の総和で、特に断らない限り係数体は$\mathbb Q$である。論文は任意の係数体でも結果が成り立つと述べている。$mL$はテンソル冪の加法的表記である。

比較対象の体積は
$$
\operatorname{vol}(L)=\limsup\_{m\to\infty}\frac{n!}{m^n}\dim H^0(X,mL)
$$
である。滑らかな一般元だけを数えるのではなく、線形系全体で総Betti数の上限を取る点が問題を難しくする。

## 主結果

### Chern類への依存（Theorem 1.2）

big直線束$L,L'$について$c\_1(L)=c\_1(L')$なら$\beta(L)=\beta(L')$である。またIntroductionでは$\beta(kL)=k^n\beta(L)$とbig有理類上の連続性が示されることを説明し、Néron–Severi空間内のbig実類の錐へ連続に拡張できると述べる。

### 双有理不変性（Theorem 1.3）

$X$を正規射影多様体、$\pi:X'\to X$を双有理射とすると、
$$
\beta(\pi^*L)=\beta(L)
$$
が成り立つ。高次元の零点集合のトポロジーは双有理操作で変わり得るが、その漸近上限の主要部分はこの引き戻しで保たれる。

### 体積との比較と等号（Theorems 1.4・1.5）

正規射影多様体上の任意のbig直線束について、
$$
\operatorname{vol}(L)\leq\beta(L)
$$
が成立する。さらに論文のDefinition 3.1の意味で有理Zariski分解を持てば、
$$
\beta(L)=\operatorname{vol}(L)
$$
となる。Introductionでは分解の詳細を後続節に委ねているため、任意の実係数分解や単なる形式的な正負分解に条件を弱めてはいけない。

切断環が有限生成の場合や次元が2以下の場合にはこの分解が存在する。従って正規射影曲面上の全てのbig直線束で等号が成立し、Corollary 1.6として任意次元の正規射影多様体上の豊富な束でも等号となる。一般のbig束全てについての等号定理ではない。

### 実超曲面のトポロジー（Theorem 1.7）

$X$を$n$次元の正規実射影多様体、$L$を実数体上定義されたbig直線束とし、$X(\mathbb R)\neq\varnothing$とする。十分大きな全ての$m$について実超曲面$Z\_m\in|mL|$が存在して、
$$
b^*(Z\_m(\mathbb R))\geq\operatorname{vol}(L)m^n+O(m^{n-1})
$$
を満たす。実零点集合のトポロジーを、大きな冪で体積に対応する規模まで増やせるという存在結果である。

## 証明の見取り図

Introductionは、滑らかな多様体上の豊富な束の場合に体積が現れる理由を説明する。滑らかな$Z\_m\in|mL|$ではLefschetz超平面定理により総Betti数の主要な寄与が中間次数に集中する。Euler標数をChern類の積分として表し、随伴公式を使うと
$$
b^*(Z\_m)=\left(\int\_Xc\_1(L)^n\right)m^n+O(m^{n-1})
$$
となる。漸近Riemann–Rochにより係数は体積に一致する。

ただし、これは滑らかな元についての説明であり、全ての元で上限を取る$\beta$との等号の証明全体ではない。論文は既存のBetti数評価も用いて一般の正規多様体やbig束へ進むが、本記事ではIntroductionに記された主張とこの動機付けまでを対象とする。

## 原論文との対応

- **Abstractページ:** [Invariants of big classes from asymptotic total Betti numbers](https://arxiv.org/abs/2610.24134)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.24134v1) — Section 1, pp. 1–2（謝辞等はp. 3の冒頭）
- **Introduction中で言及された主要結果:** Definition 1.1; Theorems 1.2–1.5, 1.7; Corollary 1.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.24134v1
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)
- **source\_scope:** Abstract and Introduction
