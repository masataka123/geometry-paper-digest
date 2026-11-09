---
layout: paper
title: The splitting type of jet bundles on the projective line
title_ja: 射影直線上のjet束の分解と正標数での半安定性
authors: Annet Kyomuhangi, Emanuela Marangone, Claudiu Raicu, Ethan Reed
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Given a vector bundle $\mathcal{E}$ on a smooth variety X, one can associate to it its jet bundles, or bundles of principal parts. These bundles encode the Taylor expansions of local sections of $\mathcal{E}$ and arise naturally in the study of differential operators. When $X=\mathbb{P}^1$ is the projective line, jet bundles decompose as direct sums of line bundles, making it natural to study their splitting types. The splitting type is well understood in characteristic zero, but exhibits subtler behavior in positive characteristic. Our goal is to give a complete answer in every positive characteristic, and in particular to provide a characterization of semistability for jet bundles on $\mathbb{P}^1$. We also determine their extremal summands and give applications to differential operators and formulas for cohomology of line bundles on infinitesimal thickenings of the diagonal.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- stability
- positive-characteristic
arxiv_id: 2611.08979v1
arxiv_url: https://arxiv.org/abs/2611.08979
arxiv_submitted: '2026-11-06'
arxiv_updated: '2026-11-06'
summary: 射影直線上の任意次数のjet束の分解型を、標数に応じた対合と再帰式で決定する。正標数での半安定性をp進的な桁の条件で特徴づけ、標準完全列の分裂、微分作用素、対角線の無限小近傍上のコホモロジーへ応用する。
abstract_en: ''
summary_en: Jet bundles on the projective line provide a concrete setting in which positive characteristic changes vector-bundle stability. The authors encode their splitting summands by an involution and give a recursive computation valid in every positive characteristic. This leads to explicit congruence tests for semistability and splitting of the jet exact sequence. The same data determine extremal twists and several cohomological and differential-operator consequences.
abstract_ja: 射影直線上の直線束のjet束について、すべての標数で分解型を対合の形に記述し、正標数ではその対合を再帰的に計算する方法を与える。これにより半安定性とjet束の標準完全列の分裂を明示的に特徴づけ、直和因子の最大・最小次数を求める。微分作用素の層の大域生成、微分作用素の存在、および射影直線の対角線の無限小厚化上の直線束コホモロジーに応用する。
abstract_source_url: https://arxiv.org/abs/2611.08979
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.08979v1](https://arxiv.org/abs/2611.08979)
- **著者:** Annet Kyomuhangi, Emanuela Marangone, Claudiu Raicu, Ethan Reed
- **初回投稿日:** 2026-11-06
- **最終更新日:** 2026-11-06
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

jet束は切断のTaylor展開をまとめるベクトル束であり、微分作用素と直接関係する。射影直線上では直線束の直和に分解するが、正標数では各直和因子の次数が標数0と異なり、半安定性も繊細な合同条件に依存する。

本論文は分解型を有限集合の対合で符号化し、正標数でその対合を再帰的に計算する。これにより、半安定性を単なる計算結果としてではなく、次数とjet次数の桁の条件として特徴づける。

さらに、標準完全列が分裂する条件と直和因子の極端な次数を決定する。微分作用素の存在や大域生成、対角線の無限小厚化上のコホモロジー消滅は、同じ分解データから得られる応用である。

## 背景と問題設定

$P^k(\mathcal O\_{\mathbb P^1}(d))$は$k$次までのprincipal partsの束で、階数は$k+1$である。標数0では$d\leq-1$または$d\geq k$のとき$\mathcal O(d-k)^{\oplus(k+1)}$となる。射影直線上の一般のベクトル束は直線束へ分解するため、各$d$に対する計算が基本となる。

## 主結果

### 分解を与える対合（Theorems 1.1、1.2）

集合$\lbrace 0,\ldots,k\rbrace $の対合$\sigma$が存在して

$$
P^k(\mathcal O(d))\simeq\bigoplus\_{i=0}^k\mathcal O(d-i-\sigma(i))
$$

となる。正標数$p$では

$$
\sigma(i)=\xi\_{k+1}^{d+1}(i)+k-i
$$

である。整数値関数$\xi\_r^s$は次の再帰で決まる。$0\leq s\leq r$なら、$i<s$で$s-r$、$s\leq i<r$で$s$を取る。$r\leq q=p^e$なら$\xi\_r^{s+q}=\xi\_r^s$である。$r<s\leq q=p^e$の場合、$q'=p^{e-1}$、$r=r\_0q'+r\_1$、$i=i\_0q'+i\_1$と書くと、$i\_1<r\_1$では$\xi\_{r\_1}^s(i\_1)$へ、$i\_1\geq r\_1$では$\xi\_{q'-r\_1}^{s-r}(i\_1-r\_1)$へ帰着する。

特に$-1\leq d\leq k$では標数によらず

$$
P^k(\mathcal O(d))\simeq\mathcal O^{\oplus(d+1)}\oplus\mathcal O(-k-1)^{\oplus(k-d)}
$$

となる。

### 半安定性の完全な判定（Theorem 1.3）

標数0では半安定であることは$d\leq-1$または$d\geq k$と同値である。標数$p>0$で$k\geq1$とし、$q=p^e>k$となる最小の$e$を選び、$q'=p^{e-1}$と置く。

$$
k=k\_0q'+k\_1,\qquad d\equiv d\_0q'+d\_1\pmod q,
$$

ただし$0\leq k\_0,d\_0<p$、$0\leq k\_1,d\_1<q'$とする。このとき半安定性の必要十分条件は

$$
d\_0\geq k\_0,\qquad d\_1\in\lbrace k\_1,q'-1\rbrace
$$

である。$k=0$は直線束なので常に半安定である。

### 完全列の分裂と極端な次数（Theorems 1.6、1.7）

標数$p>0$、$k\geq1$で、標準完全列

$$
0\longrightarrow\mathcal O(d-2k)\longrightarrow P^k(\mathcal O(d))
\longrightarrow P^{k-1}(\mathcal O(d))\longrightarrow0
$$

が分裂するための必要十分条件は、上記の最小の$q=p^e>k$について$d\equiv k-1\pmod q$となることである。

半安定となる次数の集合を$SS\_k$とし、$d$以下で最大のその元を$D\_-(k,d)$、$d$以上で最小の元を$D\_+(k,d)$とする。直和因子の最小・最大次数は

$$
m\_-(k,d)=D\_-(k,d)-k,\qquad m\_+(k,d)=D\_+(k,d)-k
$$

となる。例えば$p=3,k=4,d=6$では$P^4(\mathcal O(6))\simeq\mathcal O(3)^{\oplus2}\oplus\mathcal O(2)\oplus\mathcal O(1)^{\oplus2}$で、標数0の$\mathcal O(2)^{\oplus5}$と異なる。

### 微分作用素と厚化への応用（Corollary 1.9、Theorem 1.10）

$\mathcal D\_{d,e}^k=\mathcal Hom(P^k(\mathcal O(d)),\mathcal O(e))$は$e\geq m\_+$のとき、かつそのときに限り大域生成される。大域微分作用素が非零となる条件は$e\geq m\_-$である。また$\dim\operatorname{Diff}^k(\mathcal O(d),\mathcal O(d))=(k+1)^2$となる。

$X^{(r)}$を$\mathbb P^1\times\mathbb P^1$の対角線の$r$重厚化とすると、$\mathcal O\_{X^{(r)}}(a,b)$の全コホモロジーが消えるための必要十分条件は

$$
a+b=r-2,\qquad P^{r-1}(\mathcal O(b))\text{ が半安定}
$$

である。正標数で$a+b=r-2$なら、その$h^0,h^1$はいずれも$\frac12\sum\_{i=0}^{r-1}|\xi\_r^{b+1}(i)|$に等しい。

## 証明の見取り図

Introductionは、jet束に関連する補助束$F\_r^d$の分解を2次元トーラス作用に関して同変に追跡し、再帰式を得ることを技術的中心に挙げる。この分解からjet束の対合表示を導き、極端な次数、微分作用素、厚化のコホモロジーへ順に適用する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.08979)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.08979v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3, 1.6, 1.7, 1.10; Corollary 1.9
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.08979v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
