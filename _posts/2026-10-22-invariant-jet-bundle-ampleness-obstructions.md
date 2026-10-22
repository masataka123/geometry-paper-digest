---
layout: paper
title: Obstructions to the ampleness of invariant jet differentials on complete intersections
title_ja: 完全交差上の不変jet微分束の豊富性を妨げる主シンボル
authors: Simone Diverio
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: 'We introduce the analogue, for invariant jet differentials, of the principal symbol of a differential operator: the component of maximal degree in the highest derivative. The top symbol identifies a canonical quotient bundle of the Demailly--Semple bundle $E_{k,m}T^*_X$, with values in jet differentials of lower order, and together with the Br\"uckmann--Rackwitz vanishing theorem it gives a non-ampleness criterion for $E_{k,m}T^*_Z$ on complete intersections $Z\subset\PP^N$. On the Demailly--Semple tower the top symbol is the restriction to a thickening of the vertical divisor, inside the singular jets. The criterion applies in orders $3$ and $4$: $E_{3,5q}T^*_X$ is not ample on any smooth hypersurface $X\subset\PP^4$, and $E_{4,m}T^*_X$ is not ample for $m\ge7$ with $m\equiv0,1,2\pmod 7$ on any smooth hypersurface $X\subset\PP^5$ of degree at least $2$. This contradicts the Diverio--Trapani conjecture at its own threshold.'
topic: algebraic-geometry
tags:
- positivity
- vector-bundles-sheaves
- hyperbolicity
arxiv_id: 2609.33710v2
arxiv_url: https://arxiv.org/abs/2609.33710
arxiv_submitted: '2026-09-27'
arxiv_updated: '2026-10-21'
summary: 不変jet微分の最高階微分変数に関する主シンボルを使い、完全交差上のDemailly–Semple束が豊富でないことを示す。三階と四階について重みの特定の合同類に障害が現れ、Diverio–Trapani予想の「十分大きいすべての重み」という解釈を、その想定閾値で否定する。
abstract_en: ''
summary_en: The paper finds an obstruction to ampleness by examining a quotient of the invariant jet bundle rather than a general graded piece. Its principal symbol isolates a component whose global sections vanish on suitable complete intersections. Explicit calculations in orders three and four show that high degree does not overcome the obstruction for certain weight classes. The conclusions disprove uniform large-weight formulations of the conjecture while leaving some individual weights undecided.
abstract_ja: 最高階の微分変数について最大次数の成分を取ることで、不変jet微分に対する主シンボルを導入する。この成分はDemailly–Semple束の標準的な商束となり、低い階数のjet微分に値を取る。Brückmann–Rackwitz消滅定理と組み合わせ、完全交差上で豊富性が成立しないための判定を得る。特に三階では重みが五の倍数、四階では七以上で七を法として零・一・二の重みに障害が現れ、予想された豊富性の閾値でも反例となる。残る重みにおける存在問題とは区別される。
abstract_source_url: https://arxiv.org/abs/2609.33710
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.33710v2](https://arxiv.org/abs/2609.33710)
- **著者:** Simone Diverio
- **初回投稿日:** 2026-09-27
- **最終更新日:** 2026-10-21
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

高次数の一般完全交差では、十分高階の不変jet微分束は豊富になると期待されてきた。本論文は、jet微分の重みをどのように量化するかに注意を払い、この期待の強い形が成立しないことを示す。

鍵は、最高階の微分変数に関する最大次数成分を「商束」として取り出すことである。豊富な束の商は豊富でなければならない。しかしこの商には、低い余次元の完全交差上で切断が消える成分が残り、豊富性と矛盾する。

三階と四階では障害が重みの合同類に依存する。したがって「十分大きいすべての重み」や「十分大きいすべての固定整数倍」という主張の反例と、「どれか一つの重みで豊富になり得るか」という未決の問題を分ける必要がある。特異jetを除いた塔上の正値性に関する既存結果とも矛盾しない。

## 背景と問題設定

$E\_{k,m}T\_Z^*$ は、正則曲線の $k$-jet変数に関する重み $m$ の多項式で、再パラメータ化に対し

$$
P\bigl(j^k(f\circ\varphi)\bigr)=\varphi'(0)^mP(j^kf)
$$

と変換する不変jet微分の束である。$k=1$ では $\operatorname{Sym}^m\Omega\_Z^1$ に一致する。ここでの豊富性は束の一次元商をパラメータ化する射影束上の標準線束の豊富性を意味する。

$Z\subset\mathbb P^N$ の余次元を $c$ とすると、Diverio–Trapani予想の閾値は $k\geq N/c-1$ である。本稿は、十分大きいすべての $m$、ある $M$ の十分大きいすべての倍数 $m$、少なくとも一つの $m$、という三通りを区別する。対称冪の場合の直観を、高階jetの重みに無条件で移すことはできない。

## 主結果

### 射影四次元内の超曲面（Theorem 2.5）

任意の次数 $d\geq1$ の滑らかな複素超曲面 $X\subset\mathbb P^4$ と任意の整数 $q\geq1$ に対し、

$$
E\_{3,5q}T\_X^*\text{ は豊富でない。}
$$

次数をいくら大きくしても消えない障害であり、高次数の特殊な例だけを選ぶ結果ではない。

### 三階の完全交差への拡張（Theorem 2.6）

$Z\subset\mathbb P^N$ を、次数がそれぞれ二以上の $c$ 個の超曲面の滑らかな完全交差とする。$3c<N$ なら

$$
E\_{3,5q}T\_Z^*\text{ はすべての }q\geq1\text{ について豊富でない。}
$$

特に $3c<N\leq4c$ では予想の閾値を満たす階数三で反例となる。任意の固定整数の倍数にも五の倍数は無限にあるため、重みを固定整数の倍数に限定する修正でも一様な豊富性は回復しない。

### 四階での合同類に依存する障害（Theorem 2.7）

同じ完全交差の設定で $4c<N$ なら、

$$
m\geq7,\qquad m\equiv0,1,2\pmod7
\quad\Longrightarrow\quad E\_{4,m}T\_Z^*\text{ は豊富でない。}
$$

したがって次数二以上の滑らかな超曲面 $X\subset\mathbb P^5$ にも適用できる。$4c<N\leq5c$ では四階が予想の閾値に達している。

### 結論の限界

以上はすべての重みでの非豊富性を示すものではない。導入では、扱っていない合同類でいずれかの束が豊富になるかは未解決であると明記する。またDengのalmost jet amplenessは特異jetの外での正値性を扱い、本稿の障害は特異jetに含まれる垂直因子に沿って検出される。

## 証明の見取り図

通常の微分作用素の主シンボルと同様に、最高階微分変数について一番上の成分を取る。この成分が単なる部分商ではなく商となるため、豊富性がそこへ降りるという性質を使える。三階ではシンボルは一階微分だけに依存し、重み $5q$ の場合に二行のSchur成分が現れる。四階では二階微分までに依存する。

導入で説明される三次元の構成は、非零商束 $Q\_q$ を $\operatorname{Sym}^{2q}\Omega\_X^1\otimes\operatorname{Sym}^q\Omega\_X^1$ に入れ、$\operatorname{Sym}^rQ\_q\twoheadrightarrow Q\_{qr}$ を利用する。豊富性から十分高い対称冪の大域生成が従う一方、Brückmann–Rackwitzの消滅が必要な切断を排除する。RousseauとMerkerの不変jet代数の記述は、それぞれ三階と四階でこの商を具体化する役割を担う。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2609.33710)
- **Introduction:** [PDF](https://arxiv.org/pdf/2609.33710v2) — 導入に当たるSection 1「Genesis」pp. 1–3とSection 2「Statement, conventions, and the conjecture」pp. 3–8。技術的なSection 3以降の証明は対象外
- **Introduction中で言及された主要結果:** Theorems 2.5, 2.6, 2.7；導入で説明されるTheorem 3.8
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2609.33710v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
