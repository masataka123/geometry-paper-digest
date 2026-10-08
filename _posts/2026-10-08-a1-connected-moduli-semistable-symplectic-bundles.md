---
layout: paper
title: $\mathbb{A}^1$-connectedness of moduli of semistable bundles and symplectic bundles on a curve
title_ja: 曲線上の半安定束とsymplectic束のモジュライのA¹連結性
authors: Umesh V Dubey, Rakesh Pawar
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  In this note, we show that over a geometrically irreducible smooth projective curve over an infinite field $k$, the moduli stack of semistable vector bundles of fixed determinant is $\mathbb{A}^1$-connected if and only if the moduli stack admits a $k$-rational point. For this we use Langton's elementary modifications for vector bundles at the level of families. In addition, we prove the $\mathbb{A}^1$-connectedness of the moduli stack of symplectic bundles with forms valued in a fixed line bundle $L$ on a smooth projective curve of genus $g \ge 2$ over an infinite field $k$ with $C(k)\neq \emptyset$. As an application, we deduce the $\mathbb{A}^1$-connectedness of moduli stack of quasi-parabolic symplectic vector bundles with forms valued in a fixed line bundle.
topic: algebraic-geometry
tags:
- stability
- vector-bundles-sheaves
- moduli
arxiv_id: 2610.06458v1
arxiv_url: https://arxiv.org/abs/2610.06458v1
arxiv_submitted: '2026-10-05'
arxiv_updated: '2026-10-05'
summary: |-
  無限体上の曲線について、行列式を固定した半安定束のモジュライスタックがA¹連結であることを、有理点の存在と同値にする。さらに線束に値を持つsymplectic束とquasi-parabolic symplectic束を扱う。半安定性を保つ族の修正を通して、通常の連結性より強いホモトピー的性質を調べる。
abstract_en: |-
  In this note, we show that over a geometrically irreducible smooth projective curve over an infinite field $k$, the moduli stack of semistable vector bundles of fixed determinant is $\mathbb{A}^1$-connected if and only if the moduli stack admits a $k$-rational point. For this we use Langton's elementary modifications for vector bundles at the level of families. In addition, we prove the $\mathbb{A}^1$-connectedness of the moduli stack of symplectic bundles with forms valued in a fixed line bundle $L$ on a smooth projective curve of genus $g \ge 2$ over an infinite field $k$ with $C(k)\neq \emptyset$. As an application, we deduce the $\mathbb{A}^1$-connectedness of moduli stack of quasi-parabolic symplectic vector bundles with forms valued in a fixed line bundle.
summary_en: ''
abstract_ja: |-
  束の族をA¹ホモトピーで比較する立場から、曲線上のモジュライスタックを調べる。幾何学的既約な滑らかな射影曲線が無限体上で定義されているとき、行列式固定の半安定束のスタックは、基礎体上の点を持つこととA¹連結性が同値になる。種数2以上で曲線に有理点があれば、そのスタックの有理点の存在も得られる。固定線束に値を取るsymplectic形式を持つ束、およびquasi-parabolic構造を備えた場合にも連結性の結果を示す。
abstract_source_url: https://arxiv.org/abs/2610.06458v1
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.06458v1](https://arxiv.org/abs/2610.06458v1)
- **著者:** Umesh V Dubey, Rakesh Pawar
- **初回投稿日:** 2026-10-05
- **最終更新日:** 2026-10-05
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

モジュライ空間の連結性は、対象を連続的な族で結べるかという問いである。代数幾何のA¹ホモトピーでは、アフィン直線を変形の基本的な方向として使い、モジュライスタックにもホモトピー的な連結性を考える。本論文は、曲線上の半安定束とsymplectic束についてこの性質を調べる。

半安定束では、無限体上で基礎体の有理点を持つことがA¹連結性の必要十分条件になる。曲線の種数が2以上で有理点を持つ場合には、束のモジュライスタックにも有理点が存在することを示して連結性を得る。代数閉体だけに限定しない点が、半安定束に関する従来の扱いからの拡張である。

さらに、固定した線束に値を持つsymplectic形式を備えた束と、quasi-parabolicデータを加えた束を対象にする。結果が述べるのはスタックのA¹連結性であり、粗モジュライ空間の有理性や全ての高次A¹ホモトピー群の消滅を主張するものではない。

## 背景と問題設定

スタックにはnerve構成を通して単体的層を対応させ、A¹ホモトピー圏の対象として扱う。Introductionは、無限体上の行列式固定の全ベクトル束のスタックについて既知の連結性があり、半安定束の部分については代数閉体上で先行研究があると説明する。

<p>
曲線 $C$ 上の線束 $L$ を固定し、階数 $n$・行列式 $L$ の半安定束のスタックを $\operatorname{Bun}^{ss}_{n,L}$ と書く。symplectic束では階数を $2n$ とし、非退化交代形式の値を取る線束を固定する。半安定束の条件とsymplectic構造の条件は別々のモジュライ問題である。
</p>

## 主結果

### 半安定束と有理点（Theorem 1.1）

<p>
$C$ は無限体 $k$ 上の幾何学的既約な滑らかな射影曲線とする。このとき
</p>

<div>
$$
\operatorname{Bun}^{ss}_{n,L}\text{ が }\mathbb A^1\text{-連結}
\quad\Longleftrightarrow\quad
\operatorname{Bun}^{ss}_{n,L}(k)\ne\varnothing.
$$
</div>

<p>
右辺は、行列式 $L$ を持つ階数 $n$ の半安定束が基礎体上で存在することを意味する。有理点の存在を自動的に仮定せず、連結性と同値な条件として取り出す点が特徴である。
</p>

### 曲線に有理点がある場合（Corollary 1.2）

<p>
さらに種数が2以上で $C(k)\ne\varnothing$ なら、任意の $L\in\operatorname{Pic}(C)$ と $n\ge1$ について上のスタックは $k$-有理点を持ち、従ってA¹連結になる。これは前の同値性と組み合わせて使える存在結果である。
</p>

### Symplectic束（Theorem 1.3）

<p>
Introductionの定理文では、$C$ は体 $k$ 上の幾何学的既約な滑らかな射影曲線で、種数 $g\ge2$、$C(k)\ne\varnothing$ とする。線束 $L$ と $n\ge1$ を固定すると、$L$ に値を持つ階数 $2n$ のsymplectic束のスタック $\operatorname{Sympl}_{2n,L}$ はA¹連結である。
</p>

Theorem 1.1が半安定性を課すのに対し、ここで述べる定理はsymplectic束のスタックを対象とする。両者の仮定を混ぜて、symplectic半安定束だけの主張へ置き換えない。

### Quasi-parabolic構造を加えた場合（Theorem 1.4）

<p>
種数2以上の幾何学的既約な滑らかな射影曲線上で、相異なる $k$-有理点からなる有限集合 $D$ と、階数 $2n$ のquasi-parabolicデータ $(e,m)$ を固定する。原論文Theorem 5.3の意味でこのデータを取ると、対応するquasi-parabolic symplectic束のスタックもA¹連結となる。
</p>

Introductionは旗の全条件を展開せずTheorem 5.3を参照しているため、ここではそれらを推測して補わない。固定点での追加構造を持つモジュライにも同じ種類の連結性が及ぶ、という応用である。

## 証明の見取り図

Abstractは、半安定束についてLangton型の基本変形を族の水準で使うことを主要な方法として挙げる。族を扱いながら半安定性を整えることが、既存の全ベクトル束の連結性と半安定部分の問題を結びつける。

Introductionにおける詳細な説明は限定的であり、symplectic束の構成やquasi-parabolicデータの操作をここで再現しない。論文は半安定束、symplectic束、追加構造を持つ束の順に結果を展開する。

## 原論文との対応

- **Abstractページ:** https://arxiv.org/abs/2610.06458v1
- **Introduction:** Section 1、pp. 1–2。
- **主要定理:** Theorem 1.1、Corollary 1.2、Theorems 1.3、1.4。本文のTheorem 3.3、Corollary 3.4、Theorems 4.2、5.7への対応が記される。
- **仮定の読み方:** Abstractは無限体を述べる。上記の定理ごとの体の仮定はIntroductionの各定理文に従った。
- **論文構成:** Section 3が半安定束、Section 4がsymplectic束、Section 5.2がquasi-parabolic構造。後続の証明全体は確認範囲に含めない。
- **確認バージョン:** v1。
- **確認ライセンス:** CC BY 4.0。
- **source_scope:** Abstract and Introduction
