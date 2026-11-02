---
layout: paper
title: Odd-Degree Rigidity and a Numerical Characterization of Complete Flag Varieties
title_ja: 奇数次数の連続写像と完全旗多様体の数値的特徴づけ
authors: Kiwamu Watanabe
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AT
- math.CV
- math.DG
- math.RT
arxiv_abstract: 'Let $F=G/B$ be the complete flag variety of a connected semisimple complex linear algebraic group. We prove that if a smooth Fano variety $X$ has the same dimension and Picard number as $F$, then the existence of a continuous map $X\to F$ of odd topological degree implies $X$ is isomorphic to $F$. In particular, a smooth Fano variety homotopy equivalent to $F$ is isomorphic to $F$. The algebraic input is a numerical characterization of complete flags: a positive-dimensional smooth Fano variety $X$ is a complete flag variety if and only if its pseudoindex $\iota_X$ is at least two and ${\rm ker}({\rm Sym}^2N^1(X)_{\mathbb R}\to N^2(X)_{\mathbb R})$ contains a positive-definite quadratic form. The pseudoindex condition can equivalently be replaced by the divisibility of $-K_X$ by two in ${\rm Pic}(X)$. The key observation is that a single definite quadratic relation excludes surfaces in every fiber of any elementary contraction; standard contraction theorems then yield smooth
  ${\mathbb P}^1$-fibrations and the characterization of complete flags applies. For the odd-degree theorem, Poincar\''e duality and a mod-two Wu-class argument show that the anticanonical class is divisible by two; comparison of the integral coroot lattices then identifies the flag. Most proofs were developed through extensive discussions with OpenAI''s ChatGPT (GPT-5.6 Sol and GPT-6), based on mathematical directions supplied by the author and arguments suggested by ChatGPT; see the AI Disclosure.'
topic: algebraic-geometry
tags:
- fano-varieties
- positivity
arxiv_id: 2610.41237v1
arxiv_url: https://arxiv.org/abs/2610.41237
arxiv_submitted: '2026-10-30'
arxiv_updated: '2026-10-30'
summary: 滑らかなFano多様体から完全旗多様体への奇数次数の連続写像が、代数多様体としての同型を強制する条件を調べる。次元とPicard数の一致のもとで剛性を示し、その基礎として正定値な二次交点関係と擬指数による完全旗多様体の特徴づけを与える。
abstract_en: ''
summary_en: The paper studies how much of a complete flag variety can be recognized from another Fano variety and a continuous map between them. With dimension and Picard number fixed, an odd mapping degree forces an algebraic isomorphism. A second result provides an intersection-theoretic test for being a complete flag variety. The argument connects this numerical test with the topology of the anticanonical class.
abstract_ja: 複素半単純群の完全旗多様体と同じ次元・Picard数を持つ滑らかなFano多様体を考える。著者は、旗多様体への奇数の位相的次数を持つ連続写像が存在すれば、両者が代数多様体として同型になることを示す。また、正の次元を持つ滑らかなFano多様体が完全旗多様体となる条件を、擬指数が2以上であることと数値的交点積の核に正定値二次形式が存在することによって記述する。擬指数の条件は反標準類の2による可除性に置き換えられる。
abstract_source_url: https://arxiv.org/abs/2610.41237
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.41237v1](https://arxiv.org/abs/2610.41237)
- **著者:** Kiwamu Watanabe
- **初回投稿日:** 2026-10-30
- **最終更新日:** 2026-10-30
- **主分類・副分類:** math.AG（主分類）; math.AT, math.CV, math.DG, math.RT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

完全旗多様体は、半単純群の構造を幾何学として表す特別なFano多様体である。本論文は、別のFano多様体が旗多様体に似た位相を持つとき、それだけで複素代数幾何学的な構造まで決まるかを問う。

主結果では、次元とPicard数が一致するという仮定のもと、旗多様体への奇数次数の連続写像の存在から同型を導く。写像自体が正則あるいは代数的である必要はない。特に、完全旗多様体とホモトピー同値な滑らかなFano多様体は、その旗多様体に同型となる。

この剛性を支えるのが、交点積に現れる一つの正定値二次関係による数値的特徴づけである。交点関係と擬指数の条件から収縮写像のファイバーを制御し、既知の幾何学的特徴づけへつなぐ。位相的条件から反標準類の可除性を取り出すことが、二つの主結果を結びつける。

## 背景と問題設定

$F=G/B$ とし、$G$ は連結な複素半単純線形代数群、$B$ はBorel部分群とする。複素構造による向きを用いて、連続写像 $f:X\to F$ の次数を $f\_\ast [X]=(\deg f)[F]$ で定める。$\rho(X)$ はPicard数である。

余次元 $k$ の代数的サイクルを数値的同値で割った空間を $N^k(X)\_{\mathbb Q}$ と書く。対称積と交点積を区別して、

$$
\mu\_X:\operatorname{Sym}^2N^1(X)\_{\mathbb Q}\longrightarrow N^2(X)\_{\mathbb Q},\qquad D\odot E\longmapsto D\cdot E,\qquad R\_X=\ker\mu\_X
$$

と置く。基底 $D\_1,\ldots,D\_r$ に関して $Q=\sum\_{i,j}q\_{ij}D\_i\odot D\_j$ と書いたとき、対称行列 $(q\_{ij})$ が正定値であることを $Q$ の正定値性と呼ぶ。擬指数 $\iota\_X$ は有理曲線の反標準次数の最小値である。

## 主結果

### 奇数次数による剛性（Theorem 1.1）

滑らかなFano多様体 $X$ が $\dim X=\dim F$、$\rho(X)=\rho(F)$ を満たし、$\deg f$ が奇数となる連続写像 $f:X\to F$ が存在すれば、

$$
X\simeq F
$$

が代数多様体として成り立つ。単なる同じ次元・Picard数ではなく、奇数次数の写像という位相的情報が決定的である。ホモトピー同値の場合は次数が $\pm1$ なので、この結果が適用できる。

### 完全旗多様体の数値的判定（Theorem 1.2）

正の次元を持つ滑らかなFano多様体 $X$ について、次の三条件は同値である。

1. $X$ は完全旗多様体である。
2. $\iota\_X\geq2$ であり、$R\_X\otimes\_{\mathbb Q}\mathbb R$ に正定値二次形式が存在する。
3. $-K\_X\in2\operatorname{Pic}(X)$ であり、$R\_X\otimes\_{\mathbb Q}\mathbb R$ に正定値二次形式が存在する。

反標準類の可除性だけで旗多様体が決まるという主張ではない。数値的交点積が消える正定値二次形式との組合せが、特徴づけの内容である。

## 証明の見取り図

Introductionの説明では、正定値二次関係によって相対Picard数1の収縮のファイバーに曲面が含まれる可能性を排除する。擬指数が2以上なら、標準的な収縮定理から滑らかな $\mathbb P^1$ ファイブレーションが得られ、完全旗多様体の既知の特徴づけを適用できる。逆方向にはBorelによるコホモロジー環の記述を使う。

奇数次数の剛性では、Poincaré双対性からPicard格子の奇数指数の埋め込みを得て、mod 2のWu類の議論から反標準類の2可除性を導く。旗多様体であることが分かった後は、最高次交点多項式とWeyl次元公式、余根格子の整構造を比較して同型型を特定する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.41237)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.41237v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.41237v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
