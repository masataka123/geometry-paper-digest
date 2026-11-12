---
layout: paper
title: Semihomogenous vector bundles, $\mathbb Q$-twisted sheaves, duality, and linear systems on abelian varieties
title_ja: 半斉次ベクトル束と双対偏極の閾値
authors: Nelson Alvarado, Giuseppe Pareschi
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: 'In this paper, we point out the natural relation between $\mathbb Q$-twisted objects of the derived category of abelian varieties, cohomological rank functions, and semihomogeneous vector bundles. We apply this to two basic classes of objects, corresponding to each other via the Fourier-Mukai-Poincaré transform: positive twists of the ideal sheaf of one point and of the evaluation complexes of ample simple semihomogeneous vector bundles. This naturally leads to the introduction of $\mathbb Q^{\ge 0}$- graded section modules associated to line bundles on abelian varieties built by means of semihomogeneous vector bundles (containing the usual section rings). We prove a duality relation between such modules associated to dual polarizations, which is not visible at the level of the usual section rings. Other applications include formulas relating the thresholds of relevant cohomological rank functions appearing in this context. As a consequence we show a lower bound for the
  base point free threshold of a polarization in function of its type, and some obstructions to surjectivity of multiplication maps of global sections of certain line bundles.'
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- positivity
arxiv_id: 2407.20646v3
arxiv_url: https://arxiv.org/abs/2407.20646
arxiv_submitted: '2024-07-30'
arxiv_updated: '2026-11-09'
summary: アーベル多様体の有理数捩りを半斉次ベクトル束で具体化し、双対偏極の基点自由閾値と切断積写像を結びつける。偏極の型に依存する下界を導く一方、閾値の境界値から射影正規性の失敗を直ちに結論できない点も区別する。
abstract_en: ''
summary_en: Fractional twists become concrete through suitable simple semihomogeneous bundles on an abelian variety. This viewpoint enlarges ordinary section rings to rationally graded modules, where Fourier–Mukai duality becomes visible. The authors compare vanishing thresholds on dual polarized varieties and translate injectivity obstructions into lower bounds for base-point-freeness thresholds. Their examples also clarify why a boundary threshold alone need not decide projective normality.
abstract_ja: 半斉次ベクトル束を通じて、有理数で捩った層のコホモロジーを通常の束のコホモロジーとして扱う枠組みを説明する。点のイデアル層と評価複体をFourier–Mukai変換で結び、双対偏極に対応する有理数次数の切断加群の間に双対性を与える。そこからコホモロジー消滅閾値の公式と、偏極の型に基づく基点自由閾値の下界を得る。応用は切断積写像の全射性への障害を含む。
abstract_source_url: https://arxiv.org/abs/2407.20646
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2407.20646v3](https://arxiv.org/abs/2407.20646)
- **著者:** Nelson Alvarado, Giuseppe Pareschi
- **初回投稿日:** 2024-07-30
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

アーベル多様体上で線束の「有理数乗」による捩りを考えると、切断数やコホモロジー消滅を連続的な尺度で測れる。しかし、その対象を通常の層として直接扱いにくい。本論文は半斉次ベクトル束を使って、この有理数捩りを具体的な高階数の束として扱う。

その見方を点のイデアル層と切断の評価複体へ適用し、Fourier–Mukai変換による双対性を導く。通常の整数次数の切断環だけでは見えない関係が、有理数次数の切断加群へ広げると現れる。

応用として、双対偏極上の積写像の単射性への障害から、元の偏極の基点自由閾値の下界が得られる。半斉次束の階数は偏極の型を反映するため、型に依存する具体的な不等式につながる。一方、境界的な閾値は「ある平行移動捩りで全射でない」ことを意味しても、元の線束の射影正規性を否定するとは限らない。

## 背景と問題設定

標数零の代数閉体上の偏極アーベル多様体 $(A,l)$ を考える。$E\_{A,\lambda l}$ は

$$
\frac{[\det E\_{A,\lambda l}]}{\operatorname{rk}E\_{A,\lambda l}}=\lambda l
$$

を満たす単純半斉次ベクトル束である。$F\otimes E\_{A,\lambda l}$ のコホモロジー階数関数は、束の階数を $r$ とすると $F^{\oplus r}\langle\lambda l\rangle$ のものと一致する。

原点のイデアル層を $\mathcal I\_e$ とし、

$$
\beta\_A^0(l)=\sup\lbrace \lambda\in\mathbb Q:\mathcal I\_e\langle\lambda l\rangle\text{ はIT(1)}\rbrace ,\qquad
\beta\_A^1(l)=\inf\lbrace \lambda\in\mathbb Q:\mathcal I\_e\langle\lambda l\rangle\text{ はIT(0)}\rbrace
$$

と置く。IT(i)は全ての位相的に自明な捩りで第 $i$ 次以外のコホモロジーが消える条件の有理数捩り版である。$\beta\_A^1$ が基点自由閾値で、常に一以下、等号は偏極が基点をもつ場合に対応する。

## 主結果

### 双対偏極の閾値（Theorem A）

偏極の型を $(d\_1,\ldots,d\_g)$、双対偏極を $(\widehat A,\widehat l)$ とすると、$i=0,1$ について

$$
\beta\_A^i(l)=\frac1{d\_1d\_g\thinspace \beta\_{\widehat A}^{1-i}(\widehat l)}
$$

が成り立つ。零次と一次の消滅閾値が双対化によって入れ替わり、偏極の型が比例係数を与える。

### 積写像の閾値（Proposition B・Corollary C）

$s\_A^0(\nu l)$ を半斉次束の切断積写像が全ての位相的に自明な捩りで単射となる上側閾値、$s\_A^1(\nu l)$ を全射となる下側閾値とする。$\nu\in\mathbb Q$、$\nu>\beta\_A^i(l)$ なら

$$
s\_A^i(\nu l)=\frac{\beta\_A^i(l)}{\nu-\beta\_A^i(l)}
$$

である。整数の捩りで知られていた関係を有理数へ広げる。双対性と合わせると、任意の正の有理数 $\nu$ について

$$
\beta\_A^1(l)=\frac{s\_{\widehat A}^0(\nu\widehat l)+1}
{s\_{\widehat A}^0(\nu\widehat l)d\_1d\_g\nu}
$$

を得る。したがって双対側の単射閾値の上界が、元の側の基点自由閾値の下界になる。

### 階数関数を用いた下界（Theorem D）

$r\_{\widehat A,\widehat l}(\nu)=\operatorname{rk}E\_{\widehat A,\nu\widehat l}$ と書くと

$$
\beta\_A^1(l)\ge
\sup\_{\substack{\nu\in\mathbb Q\\\nu>\chi(\widehat l)^{-1/g}}}
\frac1{d\_1d\_g\nu}\left(1+\frac1{r\_{\widehat A,\widehat l}(\nu)}\right)
$$

が成り立つ。半斉次束の階数は偏極の型で決まるため、これは具体的な数値評価に使える。

### 偏極の型による例（Corollary E）

$d\_g>1$ なら $\beta\_A^1(l)\ge2/d\_g$ である。特に $d\_g=2$ では閾値は一となり基点をもち、$d\_g=3$ なら閾値は少なくとも $2/3$、$d\_g=4$ なら少なくとも $1/2$ である。また型が $(1,n,\ldots,n,nm)$、$m<n$ の場合は

$$
\beta\_A^1(l)\ge\frac{1+m}{mn}
$$

となる。例えば型 $(1,3,\ldots,3,6)$ では閾値は少なくとも $1/2$ である。

$s\_A^1(l)=1$ という境界では、ある位相的に自明な捩りで積写像が全射でないことと、捩りなしの射影正規性とは区別される。本論文も、この境界値だけから射影正規でないと結論することを戒めている。

## 証明の見取り図

半斉次束を使って有理数捩りを通常の導来圏の対象へ置き換え、点のイデアル層と評価複体にFourier–Mukai変換を適用する。コホモロジー階数関数の関係が、閾値公式だけでなく、有理数次数の切断加群の積写像の核・余核の双対関係を与える。

下界の構成には、双対側で生成される半斉次束の外積を用いる。階数を超える数の切断の外積が、積写像の非自明な核を生む。この単射性への障害を双対公式で戻し、Mukaiの階数に関する結果を使って偏極の型に依存する不等式へ翻訳する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2407.20646)
- **Introduction:** [PDF](https://arxiv.org/pdf/2407.20646v3) — 冒頭のIntroductionおよびSections 0.1–0.3, pp. 1–7
- **Introduction中で言及された主要結果:** Theorems A, D; Proposition B; Corollaries C, E
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2407.20646v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
