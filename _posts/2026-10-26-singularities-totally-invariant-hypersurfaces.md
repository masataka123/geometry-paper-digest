---
layout: paper
title: Singularities of totally invariant hypersurfaces of endomorphisms
title_ja: 偏極自己準同型の完全不変超曲面の特異点と射影4空間での線形性
authors: Amaël Broustet, Andreas Höring
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $f\colon X\to X$ be a polarised endomorphism of a complex projective manifold, and let $D\subset X$ be a reduced totally invariant hypersurface. We prove that every irreducible component of the singular locus of $D$ has codimension one in $D$. In particular, if $D$ is normal, then it is smooth. As an application we prove the linearity of totally invariant divisors for endomorphisms of $\mathbb P^4$.
topic: algebraic-geometry
tags:
- singularities
- complex-analytic-spaces
arxiv_id: 2609.08633v1
arxiv_url: https://arxiv.org/abs/2609.08633
arxiv_submitted: '2026-09-08'
arxiv_updated: '2026-09-08'
summary: 複素射影多様体の偏極自己準同型に対する被約な完全不変超曲面は、正規なら滑らかであることを証明する。Bernstein–Sato多項式と特異点のモノドロミーを用い、射影空間の完全不変素因子の次数3を排除して、射影4空間では超平面に限られることを示す。
abstract_en: ''
summary_en: A hypersurface preserved under taking inverse images of a polarized endomorphism is far more constrained than one merely carrying an endomorphism. The paper proves that a normal reduced hypersurface with this property must be smooth. It also excludes degree-three prime divisors in projective space and establishes the hyperplane conclusion in dimension four. The proof uses Bernstein–Sato roots and monodromy to refine earlier log-canonical singularity arguments.
abstract_ja: 複素射影多様体の偏極自己準同型に対し、逆像が集合として自分自身に一致する被約超曲面の特異点を調べる。その特異点集合の各既約成分は超曲面内で余次元1となり、特に正規な場合は滑らかである。射影空間では正規な完全不変超曲面の超平面性を得るほか、完全不変素因子の次数3を排除する。既知の次数の制約と合わせ、射影4空間の完全不変素因子は超平面であることを示す。
abstract_source_url: https://arxiv.org/abs/2609.08633
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.08633v1](https://arxiv.org/abs/2609.08633)
- **著者:** Amaël Broustet, Andreas Höring
- **初回投稿日:** 2026-09-08
- **最終更新日:** 2026-09-08
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影空間の座標を同じ整数乗に送る写像では、座標超平面は逆像を取っても変わらない。このような完全不変超曲面は一般に非常に特殊であると予想され、射影空間の完全不変な素因子は超平面に限られるという予想がある。本論文はその特異点を解析して予想の成立範囲を広げる。

主定理は、滑らかな射影多様体の偏極自己準同型に対する被約な完全不変超曲面が、正規なら必ず滑らかであることを示す。Abstractではさらに、特異点集合の各既約成分が超曲面内で余次元1を持つという形で述べられる。

射影空間への応用として、正規な場合の超平面性、完全不変素因子の次数3の排除、そして射影4空間での予想の成立を得る。高次元の一般予想全体が解決されたという主張ではない。

## 背景と問題設定

非可逆な有限自己射 $f:X\to X$ が偏極されているとは、ample直線束 $L$ と整数 $q>1$ に対し

$$
f^{\ast}L\cong L^{\otimes q}
$$

が成り立つことをいう。被約因子 $D\subset X$ の完全不変性は、集合としての条件

$$
f^{-1}(D)=D
$$

である。単に $D$ 自身が自己準同型を持つことより強い。滑らかな超曲面の場合には強い既知の制約がある一方、特異な超曲面は自己準同型を持ち得るため、特異点と完全不変性を同時に使う必要がある。

## 主結果

### 正規な完全不変超曲面は滑らか（Theorem 1.2）

$X$ を滑らかな複素射影多様体、$f$ を偏極自己準同型、$D\subset X$ を被約な完全不変超曲面とすると、$D$ は滑らかであるか、正規でないかのいずれかである。特に

$$
D\text{ が正規}\quad\Longrightarrow\quad D\text{ は滑らか}
$$

が成り立つ。従来の $(X,D)$ がlog canonicalであるという結果からさらに進み、滑らかな底の中の特異超曲面が持ち得る特異点を絞る。

### 正規な場合の超平面性（Corollary 1.3）

$n\ge2$ について、$\mathbb P^n$ の自己準同型に完全不変な正規超曲面は超平面である。主定理で滑らかさを得ることにより、滑らかな場合の既知の線形性へ帰着する。

### 次数3の排除（Corollary 1.4）

$\mathbb P^n$ の完全不変素因子 $D$ に対し、

$$
\deg D\ne3
$$

が成り立つ。ここでは正規性を仮定せず、非正規な三次超曲面も検討する。Introductionは、その中心となる三次元の非正規三次超曲面の分類を使う議論を説明する。

### 射影4空間での予想の成立（Corollary 1.5）

非可逆な自己準同型 $f:\mathbb P^4\to\mathbb P^4$ の完全不変素因子は超平面である。次数3を排除する本論文の結果と、既存の次数に関する制約を合わせることで、従来知られていた次元3以下から次元4へ予想の成立を進める。

## 証明の見取り図

特異点集合も完全不変であることと、偏極自己準同型の周期点の稠密性を用い、反復によって特異点の固定点を選ぶ。そこで完全不変性を本質的に使った根の議論により、局所Bernstein–Sato多項式が

$$
b\_{D,x}(s)=(s+1)^{d\_x}
$$

という形になることを示す。SteenbrinkスペクトルとA’Campoの定理につなげ、一般のlog canonical thresholdより細かい特異点の情報を取り出す。

次数3の排除では、非正規三次三次元多様体の分類により錐か特殊な型へ絞る。後者の非正規部分は完全不変な $\mathbb P^2$ であり、その上に誘導される写像が滑らかな二次曲線を完全不変にすることから、既知の制約に矛盾する。これはIntroductionで示された証明経路であり、後続節の特異点理論の証明を再検証したものではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2609.08633)
- **Introduction:** [PDF](https://arxiv.org/pdf/2609.08633v1) — Section 1, pp. 1–3（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorem 1.2、Corollaries 1.3, 1.4, 1.5（Conjecture 1.1は一般次元の予想）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2609.08633v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
