---
layout: paper
title: Coerciveness for complex Hessian type equations
title_ja: 複素Hessian型方程式の可解性・強圧性・数値的判定
authors: Gao Chen, Junbang Liu, Sijie Nie
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We study complex Hessian type equations associated with right-Noetherian polynomials on compact Kähler manifolds of complex dimension $n$. For two such polynomials of the same degree $2\le d\le n$ in strict proper position, we prove that under the integrability condition and the assumption that the admissible space $\mathcal{H}_2$ is non-empty, smooth admissible solvability for $f_1$, the $d_1$-coerciveness of the associated variational functional $J_1$ on normalized potentials, and the numerical criterion for $f_1$ are equivalent to each other. This extends the existence-coerciveness correspondence of Chen-Ghosh-Wang to the lower-degree setting under weaker polynomial conditions.
topic: differential-geometry
tags:
- monge-ampere-equations
- positivity
arxiv_id: 2611.27526v1
arxiv_url: https://arxiv.org/abs/2611.27526
arxiv_submitted: '2026-11-20'
arxiv_updated: '2026-11-20'
summary: コンパクトKähler多様体上で、同次数の二つのright-Noetherian多項式に付随する方程式の滑らかな可解性を、汎関数の強圧性および部分多様体上の数値的不等式と同値にする。次数が複素次元未満の場合も含む。
abstract_en: ''
summary_en: Coercivity is tested by constructing a ray adapted to each subvariety. Its asymptotic behavior yields the intersection inequalities needed for a smooth solution. This route treats polynomial degrees below the ambient dimension without requiring a higher order estimate for a parabolic flow.
abstract_ja: 変分汎関数が距離に沿って少なくとも線形に増大することを、各既約部分多様体の積分の正値性に読み替える。これを介して解の存在を示すため、従来の放物型方程式の高階評価を用いずに扱える多項式の範囲が広がる。
abstract_source_url: https://arxiv.org/abs/2611.27526
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.27526v1](https://arxiv.org/abs/2611.27526)
- **著者:** Gao Chen, Junbang Liu, Sijie Nie
- **初回投稿日:** 2026-11-20
- **最終更新日:** 2026-11-20
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

標準計量の存在をエネルギー汎関数の性質から判定するという考えを、複素Hessian型方程式に適用する。未知量は固定した類の中で背景形式を変形するポテンシャルである。

次数が多様体の次元に等しい場合には、二つの多項式の位置関係に強い条件を課した結果があった。ここではより低い次数も含め、強圧性から可解性へ直接進まず、途中に数値的判定を置く。

この判定で検査するのは、指定した余次元のすべての既約部分多様体上の交点数である。

## 背景と問題設定

J方程式や変形Hermitian–Yang–Mills方程式では、解が存在することと適切な汎関数の下からの成長に関係がある。本論文はright-Noetherian多項式で記述される族についてこの対応を扱う。

## 主結果

### 三条件の同値性（Theorem 1.1）

モニックな $f\_1,f\_2$ は同次数 $2\le d\le n$ で、厳密な位置関係 $f\_2\prec f\_1$ を満たすとする。$0\in\mathcal H\_2$ および $\int\_X G\_1(\chi)=0$ のもとで、滑らかな許容解 $g\_1(\lambda(\omega^{-1}\chi\_\varphi))=0$ の存在は、次のいずれの条件とも同値である。

正規化 $I\_2(\varphi)=0$ を満たすすべての許容ポテンシャルに対し、ある $\delta>0$ と $C\ge0$ が存在して
$$
J\_1(\varphi)\ge\delta d\_1(0,\varphi)-C
$$
が成り立つ。数値的には、余次元 $1\le r\le d$ のすべての既約部分多様体 $Y$ に対し
$$
\int\_Y G\_1^{(r)}(\chi)>0
$$
が成り立つことに対応する。

## 証明の見取り図

各部分多様体に対応する許容ポテンシャルのレイを構成し、その上で汎関数の漸近傾斜を評価する。得られた数値条件から、可解性に関する連結成分の原理と劣解から解を得る定理によって滑らかな解へ戻る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.27526)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.27526v1) — §1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1, equations (1.1)–(1.2)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.27526v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
